function LoadingIndicator(){
  return <div className="custom-loading-spinner">
    <div>
      Loading
    </div>
    <div className="spinner-grow text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <div className="spinner-grow text-secondary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <div className="spinner-grow text-success" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
}

export default LoadingIndicator