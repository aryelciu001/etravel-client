import React, { Component } from "react";
import "./LoginForm.css";

class LoginForm extends Component {
  render() {
    return (
      <form>
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
          <input onClick={this.login} type="submit" value="Login" />
        </div>
      </form>
    );
  }
}

export default LoginForm;
