import React from "react";
import DocumentViewer from "./documentviewer.js";
import ErrorBoundary from './errorboundry.js';

function Result(props){
  //PDF is loaded into a react state
  const [loadedPDF, setLoadedPDF] = React.useState(null);
  const [expanded, setExpanded] = React.useState(false);
  const [icon, setIcon] = React.useState("bi-chevron-down");

  React.useEffect(() => {
    // Dynamic Loading with webpack to load the pdf, most fancy code ive ever written
    import(`./assets/pdf/${props.result}.pdf`).then((loadedpdf) => {
      setLoadedPDF(loadedpdf.default);
    })
  });

  function expand() {
    if(!expanded){
      setExpanded(true);
      setIcon("bi-chevron-up");
    } else {
      setExpanded(false);
      setIcon("bi-chevron-down");
    }
  }
  return(
    <div className="card mt-1 mb-1 ms-3 me-3">
      <div className="row g-0 card-body bg-light p-2">
        <span className="card-title col-2 m-0">{props.result}</span>
        <a href={loadedPDF} className="card-link col-8">{props.result + ".pdf"}</a>
        <div className="col-2 d-flex justify-content-end">
          <button className="btn btn-primary" onClick={expand}>
            <i className={"bi " + icon}></i>
          </button>
        </div>
        {expanded && ( // Only show if the state allows it
          <DocumentViewer file={loadedPDF}/>
        )}
    </div>
    </div>
  )
}

export function ResultView(props) {
  return (
    <div className="d-flex flex-column">
      <ErrorBoundary>
        {props.results.map(result => <Result key={result} result={result} />)}
      </ErrorBoundary>
    </div>
  );
};

export default ResultView