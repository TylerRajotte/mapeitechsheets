import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

export function DocumentViewer(props){
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [scale, setScale] = React.useState(1);
  const zoomAmount = 0.4

  // Basic Setup for the document
  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(1);
  }

  // Controls for all the buttons
  function previousPage(){
    const newPageNumber = pageNumber - 1
    if(newPageNumber !== 0){
      setPageNumber(newPageNumber);
    }
  }

  function nextPage(){
    const newPageNumber = pageNumber + 1
    if(!(newPageNumber > numPages)){
      setPageNumber(newPageNumber);
    }
  }

  function zoomOut(){
    const newScale = scale - zoomAmount
    if(!(newScale < 0.3)){
      setScale(newScale);
    }
  }

  function zoomIn(){
    const newScale = scale + zoomAmount
    if(!(newScale > 3)){
      setScale(newScale);
    }
  }

  return(
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-center mb-2">

        <button className="btn btn-secondary btn-small" onClick={zoomOut}>
            <i className={"bi bi-zoom-out"}></i>
        </button>
        <button className="btn btn-primary btn-small ms-1" onClick={previousPage}>
            <i className={"bi bi-chevron-left"}></i>
        </button>
        <span className="d-flex align-items-center ms-3 me-3">Page {pageNumber} of {numPages}</span>
        <button className="btn btn-primary btn-small me-1" onClick={nextPage}>
            <i className={"bi bi-chevron-right"}></i>
        </button>
        <button className="btn btn-secondary btn-small" onClick={zoomIn}>
            <i className={"bi bi-zoom-in"}></i>
        </button>

      </div>
      <Document className="d-flex justify-content-center overflow-auto" file={props.file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} scale={scale}/>
      </Document>
    </div>
  )
}

export default DocumentViewer;