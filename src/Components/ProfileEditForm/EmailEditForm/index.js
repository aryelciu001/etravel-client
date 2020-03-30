import React, { Component } from "react";
import Button from "../../Button";
import "../index.css";

class EmailEditForm extends Component {
  state = {
    email: ""
  };

  onChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  onSave = () => {
    const axios = require("axios");
    const url = "http://localhost:5000/profiles/updateProfile";
    const { email } = this.state;
    var token = localStorage["token"];
    token = JSON.parse(token);
    const headers = {
      "auth-token": token.value
    };
    const newProfile = {
      newEmail: email,
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
  };

  componentDidMount() {
    this.setState({
      email: this.props.currentValue
    });
  }

  render() {
    return (
      <div className="form-container">
        <form>
          <div className="input-container">
            <p>Email</p>
            <input
              type="text"
              value={this.state.email}
              name="email"
              onChange={this.onChange}
              onSubmit={e => {
                e.preventDefault();
              }}
            />
          </div>
          <div className="profile-save-button">
            <Button text="Save Changes" onClick={this.onSave} />
          </div>
        </form>
      </div>
    );
  }
}

export default EmailEditForm;
