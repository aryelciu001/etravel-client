import React from "react";
import "./index.css";
import NameEditForm from "../ProfileEditForm/NameEditForm";
import EmailEditForm from "../ProfileEditForm/EmailEditForm";
import Navbar from "../Navbar";
import DetailsEditForm from "../ProfileEditForm/DetailsEditForm";
import PasswordEditForm from "../ProfileEditForm/PasswordEditForm";

class ProfilePage extends React.Component {
  state = {
    profile: {},
    curOpen: 0
  };

  changeTabs = clicked => {
    this.setState({ curOpen: clicked });
  };

  profileClassName = index => {
    let classStr = "profile-container-";
    if (this.state.curOpen === index) {
      classStr += "active";
    } else {
      classStr += "inactive";
    }
    return classStr;
  };

  componentDidMount() {
    const axios = require("axios");
    const api = process.env.REACT_APP_API_URL;
    const url = `${api}/profiles/getprofile`;
    var token = localStorage["token"];
    token = JSON.parse(token);
    const body = { profileId: this.props.user.profile };
    const headers = {
      "auth-token": token.value
    };
    axios.post(url, body, { headers }).then(res => {
      this.setState({ ...this.state, profile: res.data[0] });
    });
  }

  render() {
    return (
      <React.Fragment>
        {Object.keys(this.state.profile) !== 0 ? (
          <React.Fragment>
            <Navbar />
            <div className="after-navbar">
              <div className="profile-page-container">
                <h1>Edit Profile</h1>
                <div
                  className={`profile-container ${this.profileClassName(1)}`}
                  onClick={() => {
                    this.changeTabs(1);
                  }}
                >
                  <div className="header-container">Name</div>
                  <div className="content-container">
                    <p>Change your name</p>
                    {this.state.curOpen === 1 && (
                      <NameEditForm
                        currentValue={this.state.profile.name}
                        profile={this.props.user.profile}
                      />
                    )}
                  </div>
                </div>

                <div
                  className={`profile-container ${this.profileClassName(2)}`}
                  onClick={() => {
                    this.changeTabs(2);
                  }}
                >
                  <div className="header-container">Email</div>
                  <div className="content-container">
                    <div>Change your email</div>
                    {this.state.curOpen === 2 && (
                      <EmailEditForm
                        currentValue={this.state.profile.email}
                        profile={this.props.user.profile}
                      />
                    )}
                  </div>
                </div>

                <div
                  className={`profile-container ${this.profileClassName(3)}`}
                  onClick={() => {
                    this.changeTabs(3);
                  }}
                >
                  <div className="header-container">Password</div>
                  <div className="content-container">
                    <div>Change your password</div>
                    {this.state.curOpen === 3 && (
                      <PasswordEditForm
                        profile={this.props.user.profile}
                        currentValue={this.state.profile.password}
                      />
                    )}
                  </div>
                </div>

                <div
                  className={`profile-container ${this.profileClassName(4)}`}
                  onClick={() => {
                    this.changeTabs(4);
                  }}
                >
                  <div className="header-container">Details</div>
                  <div className="content-container">
                    <div>Change your details</div>
                    {this.state.curOpen === 4 && (
                      <DetailsEditForm
                        profile={this.props.user.profile}
                        currentCountry={this.state.profile.country}
                        currentPhone={this.state.profile.phoneNumber}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default ProfilePage;
