import React from "react";
import ReactDOM from "react-dom";

// Uses require context to get a list of all the pdf names in ./assets/pdf/
function getPdfNames() {
  const requireContext = require.context('./assets/pdf', false, /\.pdf$/);
  return(
    // Exports keys function from require context and also removes the ./ in the front 
    requireContext.keys().map(file => file.match(/[^\/]+$/)[0])
  );
}

// SHOULD LOAD THE FILE ONCE YOU ACTUALLY SEARCH FOR THE ITEM in the meantime should just grab the filenames and only use them
// Also move all this functionality to app.js and then just pass props back and forth becuase the main functionality 
// probably shouldn't be in this file

//Import all the pdfs from './assets/pdf' into a a list
let pdfList = []
getPdfNames().forEach(pdf => {
  // Adds object with just the name and without the extension and the file itself
  pdfList.push({name: pdf.substr(0, pdf.length-4), 
                file: import('./assets/pdf/' + pdf)})
});

export function SearchBar() {
  console.log(pdfList);

  const [searchTerm, setSearchTerm] = React.useState('');
  function onSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="input-group mb-3 mt-5 w-50">
        <input className="w-100 border border-2" value={searchTerm} onChange={onSearchChange}></input>
        <p>Input Says: {searchTerm}</p>
      </div>
    </div>

  );
};

export default SearchBar