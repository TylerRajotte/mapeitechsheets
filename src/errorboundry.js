import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {    // Update state so the next render will show the fallback UI.
    return { hasError: true };  
  }

  render() {
    if (this.state.hasError) {      
      return <h5 className="text-center w-100 h-100">Something went wrong with rendering</h5>;    
    }
      return this.props.children; 
  }
}

export default ErrorBoundary;