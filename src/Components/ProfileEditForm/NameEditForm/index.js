import React, { Component } from "react";
import "../index.css";
import Button from "../../Button";

class NameEditForm extends Component {
  render() {
    return (
      <div className="form-container">
        <form>
          <div className="input-container">
            <p>Name</p>
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

export default NameEditForm;
