import React, { useState } from "react";
import apiHandler from "./apiHandler";
import SearchResult from "./searchResult";
import mockResult from './mockResult';

const PhotoSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorState, setErrorState] = useState({});
  const [validResult, setValidResult] = useState({});

  const searchAPI = e => {
    const enteredKey = e.target.value;
    setSearchTerm(enteredKey);
    const apiResult = apiHandler(enteredKey);
    apiResult
      .then(result => {
        setValidResult(result);
      })
      .catch(err => {
        setErrorState(err);
        // use the code below to use mock data during development
        // setValidResult(mockResult);
      });
  };

  return (
    <div className='container'>
      <input className="photoTermInput" type="text" onChange={searchAPI} placeholder='enter a term to search relevant photos to it ' /> 
      <br />

      {errorState && (errorState.message || errorState.number) ? (
        <div className='errorMessage'>
          Oops, something went wrong! <br />
          {errorState.name} - {errorState.message}
        </div>
      ) : null}

            {(validResult && validResult.data) ? 
      (<SearchResult photoSet={validResult.data} />) : (null)}


    </div>
  );
};

export default PhotoSearch;
