import React from "react";
// Context is used to avoid "Prop Tunnel"
const SearchContext = React.createContext({
  location: "Los Angeles, CA",
  animal: "",
  breed: "",
  breeds: [],
  // These empty functions are to show that they exist somewhere in the app
  handleAnimalChange() {},
  handleBreedChange() {},
  handleLocationChange() {},
  getBreeds() {}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;
