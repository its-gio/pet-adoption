import React, { Component } from "react";

export default class Carousel extends Component {
  // Needs current and list of available photos
  state = {
    photos: [],
    active: 0
  };

  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleIndexClick = e => {
    this.setState({
      // +number turns variable from string to int
      active: +e.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;
    const { name } = this.props;

    return (
      <div>
        <img src={photos[active]} alt={name} className="single--hero" />

        <div className="single--list">
          {photos.map((photo, index) => (
            <img
              src={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              className={`${
                index === active ? "active" : ""
              } single--list__image`}
              alt={`${name} thumbnail ${index}`}
            />
          ))}
        </div>
      </div>
    );
  }
}
