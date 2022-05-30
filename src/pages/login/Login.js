import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div>
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form className="form">
          <label>
            <p> Username</p>
            <input type="text" />
          </label>
          <label>
            <p>Password</p>
            <input type="password" />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
