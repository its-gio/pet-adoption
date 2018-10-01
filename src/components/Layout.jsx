import React from "react";
import Pets from "./Pets";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pets name="Milk" animal="Dog" breed="Chiwawa" />;
      </div>
    );
  }
}
