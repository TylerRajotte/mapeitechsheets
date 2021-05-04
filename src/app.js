import React from "react";
import ReactDOM from "react-dom";
import './scss/bootstrapload.scss';

import TitleBar from './titlebar'
import SearchBar from './searchbar.js'

//TODO
// Look into pdf.js to load the pdf directly in the web view

export function App() {
    return (
      <div className="slim-el vh-100 d-flex flex-column">
        <div className="row g-0">
          <TitleBar />
        </div>
        <div className="row g-0">
          <SearchBar />
        </div>
      </div>
    );
};

export default App;
