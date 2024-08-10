import { useContext } from "react";
import { QuizContext } from "./App";

function End() {
  const { points, maxPoints, dispatch } = useContext(QuizContext);

  const percent = (points / maxPoints) * 100;
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <h4>Thank You for Taking Our Quiz!</h4>
      <h5>
        Your Score: {points} out of {maxPoints} ({Math.floor(percent)}%)
      </h5>
      <button
        className="btn btn-info"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default End;
