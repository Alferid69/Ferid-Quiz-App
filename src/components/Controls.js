import Timer from "./Timer";

function Controls({ dispatch, time, answer }) {
  return (
    <>
      <Timer time={time} dispatch={dispatch} />
      <button
        className="btn btn-outline-dark w-25"
        onClick={() => {if(answer!==null) dispatch({ type: "nextQuestion" })}}
      >
        Next
      </button>
    </>
  );
}

export default Controls;
