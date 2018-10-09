import React from "react";
import { Link } from "@reach/router";

export default class Pet extends React.Component {
  render() {
    // Destructuring props
    const { name, animal, breed, media, location, id } = this.props;

    let photos = [];
    let normName = name
      .toLowerCase()
      .split(" ")
      .map(name => name.charAt(0).toUpperCase() + name.slice(1))
      .join(" ");

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }

    return (
      <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={photos[0].value} alt={name} />
        </div>
        <div className="info">
          <h1>{normName}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
        </div>
      </Link>
    );
  }
}
