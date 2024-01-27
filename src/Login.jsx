import React, { useState } from "react";
import Todo from "./Todo";

const credentials = {
  username: "Erkinai",
  password: "123",
};
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  //-----------------------------------------
  const usernameChange = (e) => {
    setUsername(e.target.value);
  };
  //-------------------------------------------
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = () => {
    if (
      credentials.username === username &&
      credentials.password === password
    ) {
      setIsSubmitted(true);
      setIsSuccess(true);
    } else {
      setIsSubmitted(true);
      setIsSuccess(false);
      setUsername("");
      setPassword("");
    }
  };
  return (
    <div >
      {isSuccess && isSubmitted ? (
        <Todo />
      ) : (
        <form  className="login-box" onSubmit={onSubmitHandler}>
          <div className="login">
            <label className="login-label" htmlFor="username">Username</label>
            <input type="text" value={username} onChange={usernameChange} />
          </div>
          <div className="login">
            <label className="login-label" htmlFor="password">Password</label>
            <input type="password" onChange={passwordChange} value={password} />
          </div>
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
