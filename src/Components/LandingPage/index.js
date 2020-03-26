import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import "./LandingPage.css";
import LoginPage from "../LoginPage/LoginPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage";

class LandingPage extends Component {
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

  landing = () => {
    return (
      <div className="landing-page">
        <div className="login-button">
          <button onClick={this.login}>Login</button>
        </div>
        <div className="signup-button">
          <Link to="/landing/registration">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    );
  };

  render() {
    return (
      <Router>
        <Route exact path="/landing" component={this.landing} />
        <Route exact path="/landing/login" component={LoginPage} />
        <Route
          exact
          path="/landing/registration"
          component={RegistrationPage}
        />
      </Router>
    );
  }
}

export default withRouter(LandingPage);
