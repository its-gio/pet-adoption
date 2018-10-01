import React from "react";

const Pets = props => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h5>{props.animal}</h5>
      <h5>{props.breed}</h5>
    </div>
  );
};

export default Pets;
