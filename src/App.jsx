import React from "react";
import { render } from "react-dom";
import Pets from "./components/Pets";

class App extends React.Component {
  render() {
    return <Pets />;
  }
}

render(React.createElement(App), document.getElementById("root"));
