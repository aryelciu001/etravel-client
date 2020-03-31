import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./LoginPage.css";
import LoginForm from "../LoginForm/LoginForm";

class LoginPage extends Component {
  loginPage = () => {
    return (
      <div className="login-page landing-page">
        <LoginForm />
      </div>
    );
  };

  render() {
    return (
      <Router>
        <Route exact path="/landing/login" component={this.loginPage} />
      </Router>
    );
  }
}

export default LoginPage;
