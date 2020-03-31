import React, { Component } from "react";
import "./RegistrationForm.css";
import Button from "../Button";

class RegistrationForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    country: "",
    phoneNumber: "",
    err: {},
    loading: false
  };

  checkUppercase = str => {
    for (let i = 0; i < str.length; i++) {
      var char = str.slice(i, i + 1);
      if (char === char.toUpperCase()) {
        return true;
      }
    }
    return false;
  };

  checkLowercase = str => {
    for (let i = 0; i < str.length; i++) {
      var char = str.slice(i, i + 1);
      if (char === char.toLowerCase()) {
        return true;
      }
    }
    return false;
  };

  register = () => {
    this.setState({ ...this.state, err: {} }, () => {
      const axios = require("axios");
      const api = process.env.REACT_APP_API_URL;
      const url = `${api}/profiles/add`;
      const { name, email, password, country, phoneNumber } = this.state;
      var err = {};
      if (name.length < 4) {
        err.name = "Name is too short";
      }
      if (password.length < 8) {
        err.password = "Password is too short";
      }
      if (password) {
        if (!this.checkLowercase(password)) {
          err.password =
            "Password should contain at least one lowercase character";
        }
        if (!this.checkUppercase(password)) {
          err.password =
            "Password should contain at least one uppercase character";
        }
      }
      if (country === "") {
        err.country = "Country should not be empty";
      }
      if (phoneNumber === "") {
        err.phoneNumber = "Phone Number should not be empty";
      }
      if (Object.keys(err).length === 0) {
        axios
          .post(url, { name, email, password, country, phoneNumber })
          .then(res => {
            if (res.data.err) {
              err.email = "Email is registered for another account";
              this.setState({
                ...this.state,
                err
              });
            } else {
              const url = `${api}/profiles/login`;
              this.setState({ ...this.state, loading: true }, () => {
                axios.post(url, { email, password }).then(token => {
                  if (token.data.err) {
                    console.log(token.data.err);
                  } else {
                    const now = new Date();
                    const item = {
                      value: token.data,
                      expiry: now.getTime() + 3600 * 1000
                    };
                    localStorage.setItem("token", JSON.stringify(item));
                    window.location.replace("/profilingtest");
                  }
                });
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.setState({ ...this.state, err });
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
              autoComplete=""
            />
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={this.onChange}
              autoComplete=""
            />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={this.onChange}
              autoComplete=""
            />
          </li>
          <li>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              value={country}
              onChange={this.onChange}
              autoComplete=""
            />
          </li>
          <li>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={this.onChange}
              autoComplete=""
            />
          </li>
        </ul>
        {Object.keys(this.state.err).map(error => {
          return <div className="feedback">{this.state.err[error]}</div>;
        })}

        <div className="submit-wrapper">
          <Button onClick={this.register} text="Sign Up" />
        </div>
      </form>
    );
  }
}

export default RegistrationForm;
