import React from 'react';
import { useReactToPrint } from 'react-to-print';
import DocumentViewer from './documentviewer.js';

export function PrintButton(props){
  const [enabled, setEnabled] = React.useState(false);
  const documentRef = React.useRef(null);

  function print() {
    setEnabled(true);
    useReactToPrint({
      content: () => documentRef.current
    });
  }

  return(
    <>
      <button className="ms-3 btn btn-secondary btn-small" onClick={print}>
        <i className={"bi bi-printer"}></i>
      </button>
      { enabled &&
        <div className="bg-primary">
          <DocumentViewer ref={documentRef} file={props.file} showControls={false} pageStart={1} scale={1} />
        </div>
        }
    </>
  )
}

export default PrintButton;