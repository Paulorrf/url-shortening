import React, { useState } from "react";

const SignIn = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!username && !password) {
      setErrorMsg("please enter a username and a password");
    } else if (!username) {
      setErrorMsg("please enter a username");
    } else if (!password) {
      setErrorMsg("please enter a password");
    }
  };

  return (
    <div>
      <h2>Create account</h2>
      {errorMsg !== "" && <p data-testid="error">{errorMsg}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          className="border border-darkBlue"
          onChange={(e: any) => setUsername(e.target.value)}
          type="text"
          id="username"
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          className="border border-darkBlue"
          onChange={(e: any) => setPassword(e.target.value)}
          type="text"
          id="password"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignIn;
