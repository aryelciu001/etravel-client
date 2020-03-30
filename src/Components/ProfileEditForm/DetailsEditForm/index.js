import React, { Component } from "react";
import "../index.css";
import Button from "../../Button";

class DetailsEditForm extends Component {
  state = {
    phoneNumber: "",
    country: ""
  };

  onChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  onSave = () => {
    const axios = require("axios");
    const url = "http://localhost:5000/profiles/updateProfile";
    const { phoneNumber, country } = this.state;
    var token = localStorage["token"];
    token = JSON.parse(token);
    const headers = {
      "auth-token": token.value
    };
    const newProfile = {
      newPhoneNumber: phoneNumber,
      newCountry: country,
      profileId: this.props.profile
    };
    console.log(newProfile);
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
      phoneNumber: this.props.currentPhone,
      country: this.props.currentCountry
    });
  }

  render() {
    return (
      <div className="form-container">
        <form>
          <div className="input-container">
            <p>Country</p>
            <input
              type="text"
              name="country"
              value={this.state.country}
              onChange={this.onChange}
              onSubmit={e => {
                e.preventDefault();
              }}
            />
            <p>Phone Number</p>
            <input
              type="text"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.onChange}
            />
            <div className="profile-save-button">
              <Button text="Save Changes" onClick={this.onSave} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default DetailsEditForm;
