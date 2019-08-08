import React from "react";
import Pet from "./Pet.jsx";

export default function Results({ pets }) {
  return (
    <div className="results">
      {pets.length === 0 ? (
        <h2 className="results--not-found">No Pets Found!</h2>
      ) : (
        pets.map(pet => {
          return (
            <Pet
              animal={pet.type}
              key={pet.id}
              breed={pet.breeds.primary}
              name={pet.name}
              media={pet.photos}
              location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
              id={pet.id}
            />
          );
        })
      )}
    </div>
  );
}
