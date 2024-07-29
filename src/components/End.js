function End({ points, maxPoints }) {
  const percent = (points / maxPoints) * 100;
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <h4>Thank You for Taking Our Quiz!</h4>
      <h5>
        Your Score: {points} out of {maxPoints} ({Math.floor(percent)}%)
      </h5>
    </div>
  );
}

export default End;
