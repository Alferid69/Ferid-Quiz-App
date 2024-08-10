import { useContext } from "react";
import { QuizContext } from "./App";

function QuestionTypes() {
  const { dispatch } = useContext(QuizContext);
  const questiontypes = [
    "geographyQuestions",
    "historyQuestions",
    "mathsQuestions",
    "generalKnowledgeQuestions",
  ];

  function handleClick(e) {
    e.preventDefault();
    dispatch({ type: "chooseQuizType", payload: e.target.value });
  }

  return (
    <div className="row pt-4">
      <h2 className="h2 text-center mt-3">Please Select A Subject</h2>
      <form className="form d-flex flex-column mb-4 align-items-center gap-2">
        <button
          className="btn btn-outline-light w-50"
          value={questiontypes[0]}
          onClick={(e) => handleClick(e)}
        >
          Geography
        </button>
        <button
          className="btn btn-outline-light w-50"
          value={questiontypes[1]}
          onClick={(e) => handleClick(e)}
        >
          History
        </button>
        <button
          className="btn btn-outline-light w-50"
          value={questiontypes[2]}
          onClick={(e) => handleClick(e)}
        >
          Maths
        </button>
        <button
          className="btn btn-outline-light w-50"
          value={questiontypes[3]}
          onClick={(e) => handleClick(e)}
        >
          General
        </button>
      </form>
    </div>
  );
}

export default QuestionTypes;
