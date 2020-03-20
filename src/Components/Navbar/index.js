import React, { Component } from "react";

import "./index.css";

class Navbar extends Component {
  state = {
    screen: "mobile",
    navOpen: true
  };

  toggleNavbar = () => {
    this.setState({ ...this.state, navOpen: !this.state.navOpen });
  };

  componentDidMount() {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 600) {
        this.setState({ ...this.state, screen: "screen" });
      } else {
        this.setState({ ...this.state, screen: "mobile" });
      }
    });
  }

  render() {
    return (
      <div id="navbar">
        <div id="nav-logo">
          <img src={process.env.PUBLIC_URL + "./logoblack.png"}></img>
        </div>
        {this.state.screen !== "mobile" ? (
          <div id="nav-list">
            <ul>
              <li>Home</li>
              <li>Profile</li>
              <li>History</li>
              <li>Help</li>
              <li>Sign Out</li>
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
            class={
              this.state.navOpen
                ? "nav-list-mobile"
                : "nav-list-mobile nav-list-mobile-open"
            }
          >
            <ul>
              <li>Home</li>
              <li>Profile</li>
              <li>History</li>
              <li>Help</li>
              <li>Sign Out</li>
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
