import React, { Component } from "react";
import "../index.css";
import Button from "../../Button";

class NameEditForm extends Component {
  state = {
    name: ""
  };

  onChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  onSave = () => {
    const axios = require("axios");
    const api = process.env.REACT_APP_API_URL;
    const url = `${api}/profiles/updateProfile`;
    const { name } = this.state;
    var token = localStorage["token"];
    token = JSON.parse(token);
    const headers = {
      "auth-token": token.value
    };
    const newProfile = {
      newName: name,
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
      name: this.props.currentValue
    });
  }
  render() {
    return (
      <div className="form-container">
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <div className="input-container">
            <p>Name</p>
            <input
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.onChange}
              autoComplete=""
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

export default NameEditForm;
