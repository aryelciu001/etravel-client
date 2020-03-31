import React, { Component } from "react";
import "./RegistrationForm.css";
import Button from "../Button";

class RegistrationForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    country: "",
    phoneNumber: ""
  };
  register = () => {
    const axios = require("axios");
    const url = "http://localhost:5000/profiles/add";
    const { name, email, password, country, phoneNumber } = this.state;
    axios
      .post(url, { name, email, password, country, phoneNumber })
      .then(res => {
        if (res.data.err) {
          this.setState({
            ...this.state,
            feedback: "User exists! Please login"
          });
        } else {
          window.location.replace("/profilingtest");
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
    const { name, email, password, country, phoneNumber } = this.state;
    return (
      <form className="login-form">
        <ul>
          <li>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={this.onChange}
            />
          </li>
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
          <li>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              value={country}
              onChange={this.onChange}
            />
          </li>
          <li>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={this.onChange}
            />
          </li>
        </ul>
        <div className="submit-wrapper">
          <Button onClick={this.register} text="Sign Up" />
        </div>
      </form>
    );
  }
}

export default RegistrationForm;
