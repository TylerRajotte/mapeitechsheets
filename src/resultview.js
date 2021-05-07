import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Document } from 'react-pdf/dist/esm/entry.webpack';

function Result(props){
  //PDF is loaded into a react state
  const [loadedPDF, setLoadedPDF] = React.useState(null);

  useEffect(() => {
    // Dynamic Loading with webpack to load the pdf, most fancy code ive ever written
    import(`./assets/pdf/${props.result}.pdf`).then((loadedpdf) => {
      setLoadedPDF(loadedpdf.default);
    })
  });

  return(
    <div className="card mt-1 mb-1 ms-3 me-3">
      <div className="row g-0 card-body bg-light p-2">
        <span className="card-title col-11 m-0">{props.result + ".pdf"}</span>
        {/* <Document file={loadedPDF} /> */}
        <div className="col-1 d-flex justify-content-end">
          <button className="btn btn-primary">
            <i className="bi bi-chevron-down"></i>
          </button>
        </div>
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