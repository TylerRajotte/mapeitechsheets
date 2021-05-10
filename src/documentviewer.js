import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

export function DocumentViewer(props){
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(props.pageStart);
  const [scale, setScale] = React.useState(props.scale);
  const [width, setWidth] = React.useState(0);
  const [centered, setCentered] = React.useState(true);
  const documentContainer = React.useRef(null);
  const zoomAmount = 0.4;

  React.useEffect(() => {
    setWidth(documentContainer.current.getBoundingClientRect().width);

    // Set it to not justify center when the contents big but to justify it when its smaller
    if(documentContainer.current.scrollWidth < documentContainer.current.getBoundingClientRect().width){
      setCentered(true);
    } else {
      setCentered(false);
    }
  });

  // Basic Setup for the document
  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(props.pageStart);
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
    if(!(newScale < 0)){
      setScale(newScale);
    }
  }

  function zoomIn(){
    const newScale = scale + zoomAmount
    if(!(newScale > 2)){
      setScale(newScale);
    }
  }

  return(
    <div className="d-flex flex-column">
      { props.showControls &&
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
      }
      {/* Follow up on the auto justifying system */}
      <div className={"d-flex overflow-scroll w-100 h-100 " + (centered ? "justify-content-center" : "")} ref={documentContainer}>
        <Document file={props.file} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} scale={scale} width={width}/>
        </Document>
      </div>
    </div>
  )
}

export default DocumentViewer;