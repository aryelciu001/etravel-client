import React, { Component } from "react";
import "../index.css";
import Button from "../../Button";

class PasswordEditForm extends Component {
  state = {
    p1: "",
    p2: "",
    feedback: ""
  };

  onChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
      feedback: ""
    });
  };

  onSave = () => {
    const axios = require("axios");
    const api = process.env.REACT_APP_API_URL;
    const url = `${api}/profiles/updateProfile`;
    const { p1, p2 } = this.state;
    if (p1 === p2) {
      var token = localStorage["token"];
      token = JSON.parse(token);
      const headers = {
        "auth-token": token.value
      };
      const newProfile = {
        newPassword: p1,
        profileId: this.props.profile
      };
      axios
        .post(url, newProfile, { headers })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      this.setState({ ...this.state, feedback: "Password does not match" });
    }
  };

  render() {
    return (
      <div className="form-container">
        <form>
          <div className="input-container">
            <p>New Password</p>
            <input
              type="password"
              placeholder="Password"
              onSubmit={e => {
                e.preventDefault();
              }}
              autoComplete=""
              name="p1"
              value={this.state.p1}
              onChange={this.onChange}
            />
            <p>Re-enter your new password</p>
            <input
              type="password"
              placeholder="Password"
              onSubmit={e => {
                e.preventDefault();
              }}
              autoComplete=""
              name="p2"
              value={this.state.p2}
              onChange={this.onChange}
            />
          </div>
          {this.state.feedback}
          <div className="profile-save-button">
            <Button text="Save Changes" onClick={this.onSave} />
          </div>
        </form>
      </div>
    );
  }
}

export default PasswordEditForm;
