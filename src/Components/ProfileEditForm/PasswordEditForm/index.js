import React, { Component } from "react";
import "../index.css";
import Button from "../../Button";

class PasswordEditForm extends Component {
  render() {
    return (
      <div className="form-container">
        <form>
          <div className="input-container">
            <p>New Password</p>
            <input type="text" placeholder="Password" />
            <p>Re-enter your new password</p>
            <input type="text" placeholder="Password" />
          </div>
          <div className="profile-save-button">
            <Button text="Save Changes" />
          </div>
        </form>
      </div>
    );
  }
}

export default PasswordEditForm;
