import React from "react";
import ReactDOM from "react-dom";

function Result(props){
  return(
    <p>{props.result}</p>
  )
}

export function ResultView(props) {
  return (
    <div className="d-flex flex-column justify-content-center">
      {props.results.map(result => <Result key={result} result={result} />)}
    </div>
  );
};

export default ResultView