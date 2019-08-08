import React from "react";

export default function Pet({ name, animal, breed, media, location, id }) {
  let hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }

  const nameCase = name => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  return (
    <div className="results--single-pet">
      <a href={`/details/${id}`}>
        <img src={hero} alt={name} />
      </a>

      <div className="results--single-pet__info">
        <h3>{nameCase(name)}</h3>
        <p>{animal}</p>
        <p>{breed}</p>
        <p>{location}</p>
      </div>
    </div>
  );
}
