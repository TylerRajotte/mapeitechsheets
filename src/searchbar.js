import React from "react";

export function SearchBar(props) {
  return (
    <div className="d-flex justify-content-center">
        <input className="mb-3 mt-5 w-50 border border-2" value={props.term} onChange={props.termChange}></input>
    </div>
  );
};

export default SearchBar