function Controls({ dispatch }) {
  return (
    <>
      <button className="btn btn-outline-dark w-25">05:05</button>
      <button
        className="btn btn-outline-dark w-25"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    </>
  );
}

export default Controls;
