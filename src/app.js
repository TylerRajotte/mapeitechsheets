import React from "react";
import ReactDOM from "react-dom";
import './scss/bootstrapload.scss';

import TitleBar from './titlebar'
import SearchBar from './searchbar.js'
import ResultView from './resultview.js'

//TODO
// Look into pdf.js to load the pdf directly in the web view
// SHOULD LOAD THE FILE ONCE YOU ACTUALLY SEARCH FOR THE ITEM in the meantime should just grab the filenames and only use them
// Also move all this functionality to app.js and then just pass props back and forth becuase the main functionality 
// probably shouldn't be in this file

// Uses require context to get a list of all the pdf names in ./assets/pdf/
function getPdfNames() {
  const requireContext = require.context('./assets/pdf', false, /\.pdf$/);
  return(
    // Exports keys function from require context and also removes the ./ in the front and .pdf
    requireContext.keys().map(file => file.substr(2, file.length-6))
  );
}

//Gets all the pdf names
let pdfList = getPdfNames();

export function App() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [results, setResults] = React.useState([]);
  
  function onSearchChange(event) {
    setSearchTerm(event.target.value);

    // Gets rid of all white space and replaces it with ?|? then splits it on ?|?
    const term = event.target.value.replace(/\s+/g, '?|?').split("?|?");

    // Capitalize and replace & signs
    for(let i = 0; i < term.length; i++){
      if(term[i] === "&"){
        // Convert & -> And because thats how I decided to write them
        term[i] = "And";
      } else {
        // Capitalize the first letter
        term[i] = term[i].charAt(0).toUpperCase() + term[i].slice(1);
      }
    }
    // Joins all the terms and filters if the joined terms are a sub string
    const results = pdfList.filter(search => search.includes(term.join("")));
    setResults(results);
  }

  return (
    <div className="d-flex flex-column">
      <TitleBar />
      <SearchBar term={searchTerm} termChange={onSearchChange}/>
      <ResultView results={results}/>
    </div>
  );
};

export default App;
