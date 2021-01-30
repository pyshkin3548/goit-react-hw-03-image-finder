import React from "react";
import PropTypes from 'prop-types';
import ImageGalleryItem from "./ImageGalleryItem";
const ImageGallery = ({ hits, openModal }) => {
  return (
    <ul className="ImageGallery">
      {/* <ImageGalleryItem hits={hits} openModal={openModal}/> */}
      {hits.map((el) => (
        <ImageGalleryItem
          key={el.id}
          url={el.webformatURL}
          alt={el.tags}
          modalImage={el.largeImageURL}
          openModal={openModal}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
    hits: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    openModal: PropTypes.func.isRequired,
  };

export default ImageGallery
