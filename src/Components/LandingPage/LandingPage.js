import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./LandingPage.css";
import LoginPage from "../LoginPage/LoginPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage";

class LandingPage extends Component {
  landing = () => {
    return (
      <div className="landing-page">
        <div className="login-button">
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="signup-button">
          <Link to="/registration">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    )
  };

  render() {
    return (
      <Router>
        <Route exact path="/" component={this.landing} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/registration" component={RegistrationPage} />
      </Router>
    );
  }
}

export default LandingPage;
