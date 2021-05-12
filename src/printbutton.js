import React from 'react';
import { useReactToPrint } from 'react-to-print';
import DocumentViewer from './documentviewer.js';

function print() {
  useReactToPrint({
    content: () => <DocumentViewer file={props.file} showControls={false} pageStart={1} startScale={1} />
  });
}

export function PrintButton(props){
  return(
    <>
      <button className="ms-3 btn btn-secondary btn-small" onClick={print}>
        <i className={"bi bi-printer"}></i>
      </button>
    </>
  )
}

export default PrintButton;