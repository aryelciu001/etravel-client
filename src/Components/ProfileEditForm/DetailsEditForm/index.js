import React, { Component } from "react";
import "../index.css";
import Button from "../../Button";

class DetailsEditForm extends Component {
  render() {
    return (
      <div className="form-container">
        <form>
          <div className="input-container">
            <p>Country</p>
            <input type="text" defaultValue={this.props.currentCountry} />
            <p>Phone Number</p>
            <input type="text" defaultValue={this.props.currentPhone} />
            <div className="profile-save-button">
              <Button text="Save Changes" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default DetailsEditForm;
