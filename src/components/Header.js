function Header() {
  return (
    <header className="row pt-4">
      <div className="col d-flex align-items-center justify-content-center gap-3">
        <img
          src="ideas.png"
          style={{ width: "50px" }}
          className="img-fluid"
          alt="ideas"
        />
        <h1 className="h1 text-light">Ferid Quiz</h1>
      </div>
    </header>
  );
}

export default Header;
