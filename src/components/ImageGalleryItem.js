import React from "react";
import PropTypes from "prop-types";

// const ImageGalleryItem = ({ hits, openModal }) => {
const ImageGalleryItem = ({ url, alt, openModal, modalImage }) => {
  return (
    <>
      {/* {hits.map(({ id, webformatURL, largeImageURL, openModal, modalImage }) => (
        <li
          className="ImageGalleryItem"
          key={id}
          modalImage={largeImageURL}
          onClick={()=>openModal={modalImage}}

        >
          <img
            src={webformatURL}
            alt=""
            className="ImageGalleryItem-image"
          ></img>
        </li>
      ))} */}

      <div>
        <li onClick={() => openModal(modalImage)} className="ImageGalleryItem">
          <img src={url} alt={alt} className="ImageGalleryItem-image" />
        </li>
      </div>
    </>
  );
};

ImageGalleryItem.propTypes = {
  openModal: PropTypes.func.isRequired,
  modalImage: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
