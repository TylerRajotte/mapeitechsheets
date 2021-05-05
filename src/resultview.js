import React from "react";
import ReactDOM from "react-dom";
import { Document } from 'react-pdf/dist/esm/entry.webpack';

function loadPDF(pdf) {
  return(import('./assets/pdf/' + pdf + ".pdf").default)
}

function Result(props){
  return(
    <div className="card mt-1 mb-1 ms-3 me-3">
      <div className="card-body bg-light">
        <h6 className="card-title">{props.result + ".pdf"}</h6>
        <Document file={loadPDF(props.result)} />
      </div>
    </div>
  )
}

export function ResultView(props) {
  return (
    <div className="d-flex flex-column">
      {props.results.map(result => <Result key={result} result={result} />)}
    </div>
  );
};

export default ResultView