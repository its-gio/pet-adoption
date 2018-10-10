import React from "react";
import SearchBox from "./SearchBox.jsx";
import { navigate } from "@reach/router";

export default class SearchParams extends React.Component {
  handleSearchSubmit() {
    navigate("/");
  }

  render() {
    return (
      <div className="search-route">
        <SearchBox search={this.handleSearchSubmit} />
      </div>
    );
  }
}
