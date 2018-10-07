import React from "react";
import { Router, Link } from "@reach/router";
import Results from "./Results.jsx";
import Details from "./Details.jsx";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    );
  }
}
