function Options({ questions, dispatch, index, answer }) {
  const isDisabled = answer !== null;
  const translateStyle = {
    transform: "translateX(50px)"
  }
  const currentQuestion = questions.at(index)
  // console.log(questions.at(index).correctOption);

  return (
    <>
      {currentQuestion.options.map((option, i) => (
        <button
          className={`btn btn-outline-light w-50 answer ${
            isDisabled && i === currentQuestion.correctOption
              ? "bg-success"
              : isDisabled && i !== currentQuestion.correctOption
              ? "bg-danger"
              : ""
          }`}
          style={answer===i ? translateStyle : null}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
          disabled={isDisabled}
          key={option}
        >
          {option}
        </button>
      ))}
    </>
  );
}

export default Options;

// <Options
//   option={option}
//   key={option}
//   dispatch={dispatch}
//   index={index}
//   answer={answer}
// />

// <button
//   className="btn btn-outline-light w-75 answer"
//   onClick={() => dispatch({ type: "newAnswer", payload: index })}
//   disabled={isDisabled}
// >
//   {option}
// </button>
