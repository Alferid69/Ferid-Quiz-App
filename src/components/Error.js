function Error({dispatch}) {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <h1>Failed To Fetch Questions</h1>
      <button className="btn btn-outline-info" onClick={()=>dispatch({type: 'selecting'})}>Try Again</button>
    </div>
  )
}

export default Error
