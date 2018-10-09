import React from "react";

export default class SearchParams extends React.Component {
  state = {
    location: "",
    animal: "",
    breed: ""
  };

  handleLocationChange = e => {
    this.setState({ location: e.target.value });
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
      </div>
    );
  }
}
