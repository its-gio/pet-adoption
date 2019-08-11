import React, { Component } from "react";
import pet from "@frontendmasters/pet";

export default class Details extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }
  // I'm going to do this once then I'm done (Usefull for ajax requests)
  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,

        loading: false
      });
    }, console.error);
  }

  render() {
    if (this.loading) {
      return <h1>Loading...</h1>;
    } else {
      return <div>Loadng complete!</div>;
    }
  }
}
