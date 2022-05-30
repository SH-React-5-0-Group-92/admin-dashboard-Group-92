import React from "react";

const Signin = () => {
  return (
    <div className="signin-wrapper">
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
  );
};

export default Signin;
