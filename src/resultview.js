import React from "react";
import DocumentViewer from "./documentviewer.js";
import ErrorBoundary from './errorboundry.js';
import PrintButton from './printbutton.js'

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

  // Gives the functionality of swaping between expanded and not expanded and changes out the icons
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
        <span className="card-title col-6 m-0 d-flex align-items-center overflow-hidden p-1">{props.result}</span>
        <div className="col-6 d-flex justify-content-end">
          <a href={loadedPDF} className="card-link d-flex align-items-center overflow-hidden p-1">{props.result + ".pdf"}</a>
          <ErrorBoundary>
            <PrintButton file={loadedPDF} />
          </ErrorBoundary>
          <button className="ms-1 btn btn-primary btn-small" onClick={expand}>
            <i className={"bi " + icon}></i>
          </button>
        </div>
        {expanded && ( // Only show if the state allows it
          <ErrorBoundary>
            <DocumentViewer file={loadedPDF} showControls={true} pageStart={1} scale={0.75}/>
          </ErrorBoundary>
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