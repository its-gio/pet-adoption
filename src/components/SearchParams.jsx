import React from "react";

export default class SearchParams extends React.Component {
  state = {
    location: "",
    animal: "",
    breed: ""
  };

  render() {
    return (
      <div className="search-params">
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={this.state.location}
            placeholder="City... State..."
          />
        </label>
      </div>
    );
  }
}
