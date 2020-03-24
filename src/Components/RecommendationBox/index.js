import React, { Component } from "react";

import "./index.css";

class RecommendationBox extends Component {
  render() {
    return (
      <div className="recommendation-box">
        <div
          className="rb-img"
          style={{
            background: `url(${this.props.url})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        ></div>
        <div className="rb-text">{this.props.name}</div>
      </div>
    );
  }
}

export default RecommendationBox;
