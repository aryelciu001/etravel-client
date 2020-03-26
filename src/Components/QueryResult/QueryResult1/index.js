import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "../../Button";

import "./index.css";

class QueryResult1 extends Component {
  componentDidMount() {
    console.log(this.props.res.hotel.bg);
  }

  onClick = () => {};

  render() {
    const style = {
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    };
    const styleHotel = {
      background: `url(${this.props.res.hotel.bg})`
    };
    const styleFlight = {
      background: `url(${this.props.res.flight.logo})`
    };
    const styleItenerary = {
      background: `url(${this.props.res.itenerary.logo})`
    };

    return (
      <div className="qr-1">
        <div className="qr-11 qr-1hotel">
          <div className="qr-bg" style={{ ...styleHotel, ...style }}></div>
          <div className="qr-inf">
            {this.props.res.hotel.name}
            <br></br>
            {this.props.res.hotel.price}
          </div>
        </div>
        <div className="qr-11 qr-1flight">
          <div className="qr-bg" style={{ ...styleFlight, ...style }}></div>
          <div className="qr-inf">
            {this.props.res.flight.name}
            <br />
            {this.props.res.flight.price}
          </div>
        </div>
        <div className="qr-11 qr-1amenities">
          <div className="qr-bg" style={{ ...styleItenerary, ...style }}></div>
          <div className="qr-inf">
            {this.props.res.itenerary.name}
            <br />
            {this.props.res.itenerary.price}
          </div>
        </div>
        <div className="info-btn">
          <Link to={`/queryresult/${this.props.index}`}>
            <Button text="Details"></Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default QueryResult1;
