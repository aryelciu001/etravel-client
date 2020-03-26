import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./LandingPage.css";
import LoginPage from "../LoginPage/LoginPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage";

class LandingPage extends Component {
  landing = () => {
    return (
      <div className="landing-page">
        <div className="login-button">
          <Link to="/landing/login">
            <button>Login</button>
          </Link>
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

export default LandingPage;
