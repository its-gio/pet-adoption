import React from "react";
import pf from "petfinder-client";
import Pet from "./Pet.jsx";
import SearchBox from "./SearchBox.jsx";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

export default class Results extends React.Component {
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
          // Making sure that the data will always be an array (Even if an empty array)
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }

        this.setState({ pets });
        // Example of 2 pet objects
        // console.log(this.state.pets.slice(0, 3));
      });
  }

  render() {
    const petsCount = this.state.pets.length - 1;

    return (
      <div className="search">
        <SearchBox />
        {this.state.pets.map((pet, i) => {
          let breed;

          // Checking and joining if there is only one breed
          if (Array.isArray(pet.breeds.breed)) {
            breed = pet.breeds.breed.join(", ");
          } else {
            breed = pet.breeds.breed;
          }

          return (
            <React.Fragment key={pet.id}>
              <Pet
                animal={pet.animal}
                name={pet.name}
                breed={breed}
                media={pet.media}
                location={`${pet.contact.city}, ${pet.contact.state}`}
                id={pet.id}
              />
              {petsCount != i ? <hr /> : ""}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}
