const WelcomeMessage = ({Onpostclick}) => {
    return (
    <center className="welcome">
      <h1>Welcome to the app!</h1>
      <h2>Start making Posts</h2>
      <button className="btn btn-primary" onClick={Onpostclick}>Create a new post</button>
    </center>
  );
};

export default WelcomeMessage;