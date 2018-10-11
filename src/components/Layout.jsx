import React from "react";
import { Router, Link } from "@reach/router";
import pf from "petfinder-client";
import { Provider } from "./SearchContext.jsx";
import Results from "./Results.jsx";
import Details from "./Details.jsx";
import SearchParams from "./SearchParams.jsx";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

export default class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "",
      animal: "",
      breed: "",
      breeds: [],
      handleAnimalChange: this.handleAnimalChange,
      handleBreedChange: this.handleBreedChange,
      handleLocationChange: this.handleLocationChange,
      getBreeds: this.getBreeds
    };
  }

  handleLocationChange = e => {
    this.setState({ location: e.target.value });
  };

  handleAnimalChange = e => {
    this.setState(
      {
        animal: e.target.value,
        breed: ""
      },
      // Calling getBreeds function when this state is changed and rerendered
      this.getBreeds
    );
  };

  handleBreedChange = e => {
    this.setState({ breed: e.target.value });
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
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
          <Link to="/search-params">Search Page</Link>
        </header>
        <Provider value={this.state}>
          <Router>
            <Results path="/" />
            <Details path="/details/:id" />
            <SearchParams path="/search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}
