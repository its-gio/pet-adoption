import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results.jsx";
import useDropdown from "./useDropdown.jsx";

export default function SearchParams() {
  const [location, setLocation] = useState("San Francisco, CA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals || []);
  }

  // Runs after SearchParams runs
  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds: APIBreeds }) => {
      const breedStrings = APIBreeds.map(({ name }) => name);

      setBreeds(breedStrings);
    }, console.error);
    // Only run this change when these change
  }, [animal, setBreed, setBreeds]);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          <span className="form-title-text">Location:</span>
          <input
            id="location"
            className="form-field"
            value={location}
            placeholder="Location"
            type="text"
            onChange={e => setLocation(e.target.value)}
          />
        </label>

        <AnimalDropdown />

        <BreedDropdown />

        <div className="form-submit-container">
          <button>Submit</button>
        </div>
      </form>

      <Results pets={pets} />
    </div>
  );
}
