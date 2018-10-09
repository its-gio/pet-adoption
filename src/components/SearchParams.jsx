import React from "react";
import { ANIMALS } from "petfinder-client";

export default class SearchParams extends React.Component {
  state = {
    location: "",
    animal: "",
    breed: ""
  };

  handleLocationChange = e => {
    this.setState({ location: e.target.value });
  };

  handleAnimalChange = e => {
    this.setState({ animal: e.target.value });
  };

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
