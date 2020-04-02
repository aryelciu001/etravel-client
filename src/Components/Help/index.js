import React, { Component } from "react";

import Navbar from "../Navbar";

import "./index.css";

class Help extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar></Navbar>
                <div className="after-navbar">
                    <div className="help-page">
                        <h1> HELP PAGE </h1>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Help;
