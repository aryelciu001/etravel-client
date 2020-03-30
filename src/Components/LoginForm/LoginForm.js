import React, { Component } from "react";
import "./LoginForm.css";
import Button from "../Button";

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };
  login = () => {
    const axios = require("axios");
    const url = "http://localhost:5000/profiles/login";
    const { email, password } = this.state;
    axios.post(url, { email, password }).then(token => {
      console.log(token);
      if (token.data.err) {
        this.setState({
          ...this.state,
          feedback: "User not found! Please check your email and password."
        });
      } else {
        const now = new Date();
        const item = {
          value: token.data,
          expiry: now.getTime() + 3600 * 1000
        };
        localStorage.setItem("token", JSON.stringify(item));
        window.location.replace("/");
      }
    });
  };
  onChange = e => {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value,
      feedback: ""
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form className="login-form">
        <ul>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={this.onChange}
            />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={this.onChange}
            />
          </li>
        </ul>
        {this.state.feedback}
        <div className="submit-wrapper">
          <Button onClick={this.login} text="Login" />
        </div>
      </form>
    );
  }
}

export default LoginForm;
