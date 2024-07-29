function Progress({numberOfQuestions, index, points, maxPoints}) {
  return (
    <div className="d-flex justify-content-around bg-info align-items-center">
      <p>Question <strong>{index + 1}</strong>/{numberOfQuestions}</p>
      <p >Points <strong>{points}</strong>/{maxPoints}</p>
    </div>
  )
}

export default Progress
