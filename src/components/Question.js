import { useContext } from "react";
import Options from "./Options";
import { QuizContext } from "./App";

function Question() {
  const { questions, index, dispatch, answer, numberOfQuestions } =
    useContext(QuizContext);

  // console.log(questions[index]);
  if (index === numberOfQuestions - 1) {
    dispatch({ type: "lastQuestion" });
    return;
  }

  return (
    <div className="d-flex align-items-center flex-column justify-content-center gap-2">
      <h4>{questions[index].question}</h4>
      <Options
        questions={questions}
        dispatch={dispatch}
        answer={answer}
        index={index}
      />
    </div>
  );
}

export default Question;
