import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./LoginPage.css";
import LandingPage from "../LandingPage/index";
import LoginForm from "../LoginForm/LoginForm";

import backButton from "../../Assets/Images/back-button.png";

class LoginPage extends Component {
  loginPage = () => {
    return (
      <div className="login-page">
        <Link to="/landing">
          <img src={backButton} className="back-button" />
        </Link>
        <LoginForm />
      </div>
    );
  };

  render() {
    return (
      <Router>
        <Route exact path="/landing/login" component={this.loginPage} />
        <Route exact path="/landing" component={LandingPage} />
      </Router>
    );
  }
}

export default LoginPage;
