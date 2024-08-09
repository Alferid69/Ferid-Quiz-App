import { useContext } from "react";
import { QuizContext } from "./App";

function Start() {
  const { dispatch, numberOfQuestions, subject } = useContext(QuizContext);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <p className="h5 text-center">
        {numberOfQuestions} number of questions are ready for the subject{" "}
        {subject}. Click below to start!
      </p>
      <button
        className="btn btn-light"
        onClick={() => dispatch({ type: "start" })}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Start;
