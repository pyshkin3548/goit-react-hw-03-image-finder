import React from "react";
import PropTypes from "prop-types";

const Button = ({ fetchArticles }) => {
  return (
    <>
      <button className="Button" type="button" onClick={fetchArticles}>
        Load more
      </button>
    </>
  );
};
Button.propTypes = {
    fetchArticles: PropTypes.func.isRequired,
};

export default Button;
