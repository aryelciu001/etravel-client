import React, { Component } from "react";
import "./LoginForm.css";
import Button from "../Button";

class LoginForm extends Component {
  login = () => {
    const axios = require("axios");
    const url = "http://localhost:5000/profiles/login";
    axios
      .post(url, { email: "abc123@gmail.com", password: "123123" })
      .then(token => {
        const now = new Date();
        const item = { value: token.data, expiry: now.getTime() + 3600 * 1000 };
        localStorage.setItem("token", JSON.stringify(item));
      })
      .then(() => {
        window.location.replace("/");
      });
  };

  render() {
    return (
      <form className="login-form">
        <ul>
          <li>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </li>
        </ul>
        <div className="submit-wrapper">
          <Button onClick={this.login} text="Login" />
        </div>
      </form>
    );
  }
}

export default LoginForm;
