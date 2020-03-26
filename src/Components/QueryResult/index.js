import React, { Component } from "react";

import Navbar from "../Navbar";
import QueryResult1 from "./QueryResult1";

import "./index.css";

class QueryResult extends Component {
  state = {
    res: []
  };

  componentDidMount() {
    this.setState({ ...this.state, res: this.props.results });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div className="after-navbar">
          <div className="query-result">
            {this.state.res.map((el, i) => {
              return <QueryResult1 res={el} index={i}></QueryResult1>;
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default QueryResult;
