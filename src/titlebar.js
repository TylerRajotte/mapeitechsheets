import React from "react";
import ReactDOM from "react-dom";

export function TitleBar() {
    return (
      <nav className="navbar navbar-light bg-light ps-2 pe-2">
        <div className='container-fluid p-0'>
          <div className="navbar-brand p-0">
            <i class="bi bi-journal-text fs-4 align-middle me-1"></i>
            <h4 className="mb-0 align-middle d-inline">Mapei Technical Sheet Lookup</h4>
          </div>
        </div>
      </nav>
    );
};

export default TitleBar;
