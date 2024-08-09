import { useContext } from "react";
import Timer from "./Timer";
import { QuizContext } from "./App";

function Controls() {
  const { dispatch, time, answer } = useContext(QuizContext);
  return (
    <>
      <Timer time={time} dispatch={dispatch} />
      <button
        className="btn btn-outline-dark w-25"
        onClick={() => {
          if (answer !== null) dispatch({ type: "nextQuestion" });
        }}
      >
        Next
      </button>
    </>
  );
}

export default Controls;
