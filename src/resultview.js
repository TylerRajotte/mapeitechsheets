import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Document } from 'react-pdf/dist/esm/entry.webpack';

function Result(props){
  const [loadedPDF, setLoadedPDF] = React.useState(null);

  useEffect(() => {
    // Dynamic Loading with webpack to load the pdf, most fancy code ive ever written
    import(`./assets/pdf/${props.result}.pdf`).then((loadedpdf) => {
      setLoadedPDF(loadedpdf.default);
    })
  });

  return(
    <div className="card mt-1 mb-1 ms-3 me-3">
      <div className="card-body bg-light">
        <h6 className="card-title">{props.result + ".pdf"}</h6>
        <Document file={loadedPDF} />
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