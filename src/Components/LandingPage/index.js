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

import logo from "../../Assets/Images/logoblack.png";

class LandingPage extends Component {
  landing = () => {
    return (
      <div className="landing-page">
        <img src={logo} className="landing-logo" />
        <div className="buttons-container">
          <div className="button-wrapper">
            <Link to="/landing/login">
              <button onClick={this.login} className="login-button">Login</button>
            </Link>
          </div>
          <div className="button-wrapper">
            <Link to="/landing/registration">
              <button className="signup-button">Sign Up</button>
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
