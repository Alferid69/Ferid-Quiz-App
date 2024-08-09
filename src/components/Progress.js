import { useContext } from "react";
import { QuizContext } from "./App";

function Progress() {
  const { numberOfQuestions, index, points, maxPoints } =
    useContext(QuizContext);

  return (
    <div className="d-flex justify-content-around bg-info align-items-center">
      <p>
        Question <strong>{index + 1}</strong>/{numberOfQuestions}
      </p>
      <p>
        Points <strong>{points}</strong>/{maxPoints}
      </p>
    </div>
  );
}

export default Progress;
