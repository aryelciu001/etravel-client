import React, { Component } from "react";
import Button from "../../Button";
import "../index.css";

class EmailEditForm extends Component {
  render() {
    return (
      <div className="form-container">
        <form>
          <div className="input-container">
            <p>Email</p>
            <input type="text" defaultValue={this.props.currentValue} />
          </div>
          <div className="profile-save-button">
            <Button text="Save Changes" />
          </div>
        </form>
      </div>
    );
  }
}

export default EmailEditForm;
