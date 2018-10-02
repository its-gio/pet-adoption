import React from "react";
import Pets from "./Pets.jsx";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pets name="Milk" animal="Dog" breed="Chiwawa" />
        <Pets name="Cookie" animal="Dog" breed="Pit Bull" />
        <Pets name="Boike" animal="Cat" breed="Mixed" />
      </div>
    );
  }
}
