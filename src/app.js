import React from "react";
import ReactDOM from "react-dom";
import './scss/bootstrapload.scss';

import TitleBar from './titlebar'

export function App() {
    return (
      <div className="slim-el vh-100 d-flex flex-column">
        <div className="row g-0">
          <TitleBar />
        </div>
        <div className="row g-0 flex-fill">
          <div className="row g-0">
            <p>Hello Im in the body of the beast</p>
          </div>
        </div>
      </div>
    );
};

export default App;
