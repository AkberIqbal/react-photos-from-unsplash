import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./style.css";

const SearchResult = photoSet => {
  const [photoArray, setPhotoArray] = useState([]);

  useEffect(() => {
    if (
      photoSet &&
      photoSet.photoSet.results &&
      photoSet.photoSet.results.length > 0
    ) {
      setPhotoArray(photoSet.photoSet.results);
    }
  }, [photoSet]);

  return (
    <>
      {photoArray && photoArray.length > 0 ? (
        <div className="container myImageContainer">
          <h5>We found {photoArray.length} relevant results:</h5>
          <div className="row">
            {photoArray.map((img, index) => (
              <div id={`img${index}`} className="col-12 col-sm-6 col-lg-4 myImages">
                <img src={img.urls.thumb} className="img-fluid" />
                <p>{img.alt_description} </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

SearchResult.propTypes = {
  photoSet: PropTypes.object
};

SearchResult.defaultProps = {
  photoSet: {}
};

export default SearchResult;
