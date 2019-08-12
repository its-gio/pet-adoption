import React, { Component } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel.jsx";

export default class Details extends Component {
  state = { loading: true };

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
      return <h2>Loading...</h2>;
    }

    const { animal, breed, location, description, name, media } = this.state;

    return (
      <div>
        <Carousel media={media} name={name} />

        <h3>{name}</h3>
        <p>{animal}</p>
        <p>{breed}</p>
        <p>{location}</p>
        <button>Adopt {name}</button>

        <p>{description}</p>
      </div>
    );
  }
}
