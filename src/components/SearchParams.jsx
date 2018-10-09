import React from "react";
import pf, { ANIMALS } from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

export default class SearchParams extends React.Component {
  state = {
    location: "",
    animal: "",
    breeds: []
  };

  handleLocationChange = e => {
    this.setState({ location: e.target.value });
  };

  handleAnimalChange = e => {
    this.setState(
      {
        animal: e.target.value,
        breeds: []
      },
      // Calling getBreeds function when this state is changed and rerendered
      this.getBreeds
    );
  };

  getBreeds() {
    if (this.state.animal) {
      // Listing the breeds of the selected animal (in state)
      petfinder.breed.list({ animal: this.state.animal }).then(data => {
        if (
          data.petfinder &&
          data.petfinder.breeds &&
          Array.isArray(data.petfinder.breeds.breed)
        ) {
          this.setState({ breeds: data.petfinder.breeds.breed });
        } else {
          // Empty array if there are no animals selected
          this.setState({ breeds: [] });
        }
      });
    } else {
      // Empty array if there are no animals selected
      this.setState({ breeds: [] });
    }
  }

  render() {
    return (
      <div className="search-params">
        <label htmlFor="location">
          Location
          <input
            onChange={this.handleLocationChange}
            id="location"
            value={this.state.location}
            placeholder="City... State..."
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={this.state.animal}
            onChange={this.handleAnimalChange}
            onBlur={this.state.animal}
          >
            <option />
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}
