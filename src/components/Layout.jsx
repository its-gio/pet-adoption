import React from "react";
import pf from "petfinder-client";
import Pets from "./Pets.jsx";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }
  componentDidMount() {
    petfinder.pet
      .find({ output: "full", location: "Los Angeles, CA" })
      .then(data => {
        let pets;

        // Checking if these exist
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }

        this.setState({ pets });
      });
  }

  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pets name="Milk" animal="Dog" breed="Chiwawa" />
        <Pets name="Cookie" animal="Dog" breed="Pit Bull" />
        <Pets name="Boike" animal="Cat" breed="Mixed" />
      </div>
    );
  }
}
