import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../Auth";
import { login } from "../../helpers/auth-helpers";
import classes from "./Login.module.css";

const Login = () => {
  const handleLogin = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    login(email.value, password.value);
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className={classes.LoginContainer}>
      <h2>Please Login To Try The App</h2>
      <p><strong>Username:</strong> testmyapp@email.com</p>
      <p><strong>Password:</strong> test1!</p>
     <form onSubmit={handleLogin}>
        <div className={classes.Group}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email..."
            required
          />
        </div>
        <div className={classes.Group}>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password..."
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
