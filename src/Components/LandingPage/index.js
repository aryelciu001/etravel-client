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
import Button from "../Button";

import logo from "../../Assets/Images/logoblack.png";

class LandingPage extends Component {
  landing = () => {
    return (
      <div className="landing-page">
        <div className="buttons-container">
          <img src={logo} className="landing-logo" />
          <div className="button-wrapper">
            <Link to="/landing/login">
              <Button
                onClick={this.login}
                text="Login"
                className="login-button"
              >
                Login
              </Button>
            </Link>
          </div>
          <div className="button-wrapper">
            <Link to="/landing/registration">
              <Button className="signup-button" text="Sign Up">
                Sign Up
              </Button>
            </Link>
          </div>
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
