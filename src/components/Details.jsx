import React from "react";
import pf from "petfinder-client";
import { navigate } from "@reach/router";
import Carousel from "./Carousel.jsx";
import Modal from "./Modal.jsx";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

export default class Details extends React.Component {
  state = {
    loading: true,
    showModal: true
  };

  // If showModal = true change to false, Vise Versa
  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  componentDidMount() {
    petfinder.pet
      .get({
        output: "full",
        id: this.props.id
      })
      .then(data => {
        const pet = data.petfinder.pet;
        let breed;

        if (Array.isArray(pet.breeds.breed)) {
          breed = pet.breeds.breed.join(", ");
        } else {
          breed = pet.breeds.breed;
        }

        this.setState({
          name: pet.name,
          animal: pet.animal,
          location: `${pet.contact.city}, ${pet.contact.state}`,
          description: pet.description,
          media: pet.media,
          breed,
          loading: false
        });
      })
      .catch(() => {
        // Reach Router lets us navigate anywhere if error is caught
        navigate("/");
      });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const {
      name,
      animal,
      breed,
      location,
      description,
      media,
      showModal
    } = this.state;
    let normName = name
      .toLowerCase()
      .split(" ")
      .map(name => name.charAt(0).toUpperCase() + name.slice(1))
      .join(" ");

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{normName}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
          <button onClick={this.toggleModal}>Adopt {name}</button>
          <p>{description}</p>
          {/* Ternary that toggles showModal to populate buttons section */}
          {showModal ? (
            <Modal>
              <h1>Would you like to adopt {name}</h1>
              <div className="buttons">
                <button onClick={this.toggleModal}>Yes!</button>
                <button onClick={this.toggleModal}>Hell Yes!</button>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}
