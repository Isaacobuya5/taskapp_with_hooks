import React, { useState } from "react";

const Register = ({setUser}) => {
  // state for register
  const [registeredUser, setRegisteredUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // change fields dynamically
  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setRegisteredUser({
      ...registeredUser,
      [name]: value,
    });
  }

  // submit and change state
  function handleSubmit(event) {
    event.preventDefault();
    setUser(username);
}

  const { username, email, password, confirmPassword } = registeredUser;
  return (
    <article id="register-form">
      <h3>Register Here</h3>
      <div className="divider"></div>
      <form>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          value={username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email address"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={handleChange}
        />
      </form>
      <span className="btn">
        <button type="submit" onClick={handleSubmit}>Register</button>
      </span>
      <span className="non-member-text">
        already a member?. click here to login
      </span>
    </article>
  );
};
export default Register;
