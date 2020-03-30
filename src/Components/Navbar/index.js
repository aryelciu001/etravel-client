import React, { Component } from "react";

import logo from "../../Assets/Images/logoblack.png";

import "./index.css";

import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    screen: "mobile",
    navOpen: true
  };

  toggleNavbar = () => {
    this.setState({ ...this.state, navOpen: !this.state.navOpen });
  };

  componentDidMount() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    if (window.innerWidth >= 600) {
      this.setState({ ...this.state, screen: "screen" });
    } else {
      this.setState({ ...this.state, screen: "mobile" });
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 600) {
        this.setState({ ...this.state, screen: "screen" });
      } else {
        this.setState({ ...this.state, screen: "mobile" });
      }
    });
  }

  signout = () => {
    localStorage.removeItem("token");
    window.location.replace("/landing");
  };

  render() {
    return (
      <div id="navbar">
        <div id="nav-logo">
          <img src={logo} alt="Logo"></img>
        </div>
        {this.state.screen !== "mobile" ? (
          <div id="nav-list">
            <ul>
              <li>
                <Link exact="true" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/history">History</Link>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
              <li onClick={this.signout} style={{ cursor: "pointer" }}>
                Sign Out
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
        {this.state.screen === "mobile" ? (
          <div id="burger-div" onClick={this.toggleNavbar}>
            <div className="burger-btn">
              <div
                className={!this.state.navOpen ? "top top-open" : "top"}
              ></div>
              <div
                className={!this.state.navOpen ? "mid mid-open" : "mid"}
              ></div>
              <div
                className={!this.state.navOpen ? "btm btm-open" : "btm"}
              ></div>
            </div>
          </div>
        ) : (
          ""
        )}
        {this.state.screen === "mobile" ? (
          <div
            className={
              this.state.navOpen
                ? "nav-list-mobile"
                : "nav-list-mobile nav-list-mobile-open"
            }
          >
            <ul>
              <li>
                <Link exact="true" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/history">History</Link>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
              <li>
                <li onClick={this.signout} style={{ cursor: "pointer" }}>
                  Sign Out
                </li>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Navbar;
