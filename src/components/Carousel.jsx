import React from "react";

export default class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  // Grabs state from parent props
  static getDerivedStateFromProps({ media }) {
    let photos = [];

    if (media && media.photos && media.photos.photo) {
      // Filters all photos that don't have the size of 'pn'
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }

    return { photos: photos };
  }

  handleIndexClick = e => {
    this.setState({
      // + turns string into a number
      active: +e.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active].value} alt="Primary Animal" />
        <div className="carousel-smaller">
          {photos.map((photo, i) => (
            // eslint-disable-next-line
            <img
              key={photo.value}
              onClick={this.handleIndexClick}
              data-index={i}
              src={photo.value}
              className={i === active ? "active" : ""}
              alt="Animal Thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}
