import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./RegistrationPage.css";
import LandingPage from "../LandingPage/index";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

import backButton from "../../Assets/Images/back-button.png";

class RegistrationPage extends Component {
  registrationPage = () => {
    return (
      <div className="registration-page landing-page">
        <RegistrationForm />
      </div>
    );
  };

  render() {
    return (
      <Router>
        <Route
          exact
          path="/landing/registration"
          component={this.registrationPage}
        />
        <Route exact path="/landing" component={LandingPage} />
      </Router>
    );
  }
}

export default RegistrationPage;
