import React, { Component } from "react";

import Navbar from "../Navbar";
import Button from "../Button";

import "./index.css";

class QueryResultDetail extends Component {
  state = {
    res: {}
  };

  componentDidMount() {
    var results = this.props.results;
    var index = this.props.params.match.params.index;
    if (results[index]) {
      this.setState({
        ...this.state,
        res: results[index]
      });
    } else {
      this.setState({
        ...this.state,
        res: {}
      });
    }
  }

  style = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };

  render() {
    const { res } = this.state;
    var bg = {};
    if (Object.keys(res).length !== 0) {
      bg = {
        hotel: { background: `url(${this.state.res.hotel.bg})` },
        flight: { background: `url(${this.state.res.flight.logo})` },
        itenerary: { background: `url(${this.state.res.itenerary.logo})` }
      };
    }
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div className="after-navbar">
          {Object.keys(this.state.res).length !== 0 ? (
            <div className="details">
              <div className="details1 details-hotel">
                <div
                  className="pict"
                  style={{ ...bg.hotel, ...this.style }}
                ></div>
                <div className="text"></div>
              </div>
              <div className="details1 details-flight">
                <div
                  className="pict"
                  style={{ ...bg.flight, ...this.style }}
                ></div>
                <div className="text"></div>
              </div>
              <div className="details1 details-itenerary">
                <div
                  className="pict"
                  style={{ ...bg.itenerary, ...this.style }}
                ></div>
                <div className="text"></div>
              </div>
              <div className="book-btn">
                <Button text="Book Now"></Button>
              </div>
            </div>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

export default QueryResultDetail;
