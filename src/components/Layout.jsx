import React from "react";
import { Router } from "@reach/router";
import Results from "./Results.jsx";
import Details from "./Details.jsx";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    );
  }
}
