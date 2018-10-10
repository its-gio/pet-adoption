import React from "react";
import { ANIMALS } from "petfinder-client";
import { Consumer } from "./SearchContext.jsx";

export default class SearchBox extends React.Component {
  capIt(name) {
    let normName = name
      .toLowerCase()
      .split(" ")
      .map(name => name.charAt(0).toUpperCase() + name.slice(1))
      .join(" ");
    return normName;
  }

  render() {
    return (
      <Consumer>
        {/* context now reflects the state */}
        {context => (
          <div className="search-params">
            <label htmlFor="location">
              Location
              <input
                onChange={context.handleLocationChange}
                id="location"
                value={context.location}
                placeholder="City... State..."
              />
            </label>
            <label htmlFor="animal">
              Animal
              <select
                id="animal"
                value={context.animal}
                onChange={context.handleAnimalChange}
                onBlur={context.handleAnimalChange}
              >
                <option value="">All Animals</option>
                {ANIMALS.map(animal => (
                  <option key={animal} value={animal}>
                    {this.capIt(animal)}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="breed">
              Breed
              <select
                id="breed"
                value={context.breed}
                onChange={context.handleBreedChange}
                onBlur={context.handleBreedChange}
                disabled={context.breeds.length === 0}
              >
                <option />
                {context.breeds.map(breed => (
                  <option key={breed} value={breed}>
                    {breed}
                  </option>
                ))}
              </select>
            </label>
            <button>Submit</button>
          </div>
        )}
      </Consumer>
    );
  }
}
