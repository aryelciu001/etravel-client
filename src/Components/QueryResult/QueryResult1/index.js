import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "../../Button";

import "./index.css";

class QueryResult1 extends Component {
  componentDidMount() {}

  onClick = () => {};

  render() {
    const style = {
      backgroundPosition: "center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat"
    };
    const styleHotel = {
      background: `url(${this.props.res.hotel[2]})`
    };
    const styleFlightInbound = {
      background: `url(${this.props.res.flight["Inbound"]["flights"][0]["Carrier"]["ImageUrl"]})`
    };
    const styleFlightOutbound = {
      background: `url(${this.props.res.flight["Outbound"]["flights"][0]["Carrier"]["ImageUrl"]})`
    };
    const styleItinerary = {
      background: `url(${this.props.res.itinerary[0]["url"]})`
    };

    return (
      <div className="qr-1">
        <div className="qr-1top">
          <div className="qr-11 qr-1hotel">
            <div className="qr-bg" style={{ ...styleHotel, ...style }}></div>
            <div className="qr-inf">
              <div className="qr1-title">
                <strong>{this.props.res.hotel[0]}</strong>
              </div>
              <p className="qr1-detail">
                {this.props.res.hotel[3]["streetAddress"]}
                <br></br>
                {this.props.res.hotel[3]["postalCode"]}
                <br></br>
                {this.props.res.hotel[3]["countryName"]}
              </p>
            </div>
          </div>
          <div className="qr-11 qr-1flight">
            <div className="qr-1flightprice">
              <div className="qr-1flight-departure">
                <div
                  className="qr-bg"
                  style={{ ...styleFlightOutbound, ...style }}
                ></div>
                <div className="qr-inf">
                  <div className="qr1-title">
                    <strong>
                      {
                        this.props.res.flight["Outbound"]["flights"][0][
                          "Carrier"
                        ]["Name"]
                      }
                    </strong>
                  </div>
                  <p className="qr1-detail">
                    {
                      this.props.res.flight["Outbound"]["flights"][0][
                        "Carrier"
                      ]["DisplayCode"]
                    }
                    -
                    {
                      this.props.res.flight["Outbound"]["flights"][0][
                        "FlightNumber"
                      ]
                    }
                    <br></br>
                  </p>
                </div>
              </div>
              <div className="qr-1flight-return">
                <div
                  className="qr-bg"
                  style={{ ...styleFlightInbound, ...style }}
                ></div>
                <div className="qr-inf">
                  <div className="qr1-title">
                    <strong>
                      {
                        this.props.res.flight["Inbound"]["flights"][0][
                          "Carrier"
                        ]["Name"]
                      }
                    </strong>
                  </div>
                  <p className="qr1-detail">
                    {
                      this.props.res.flight["Inbound"]["flights"][0]["Carrier"][
                        "DisplayCode"
                      ]
                    }
                    -
                    {
                      this.props.res.flight["Inbound"]["flights"][0][
                        "FlightNumber"
                      ]
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="qr-price">
              $SGD {this.props.res.flight["Price"]}
            </div>
          </div>
          <div className="qr-11 qr-1amenities">
            <div
              className="qr-bg"
              style={{ ...styleItinerary, ...style }}
            ></div>
            <div className="qr-inf">
              <div className="qr1-title">
                <p>
                  {this.props.res.itinerary[0]["name"]}
                  <br></br>
                  {this.props.res.itinerary[1]["name"]}
                  <br></br>
                  {this.props.res.itinerary[2]["name"]}
                  <br></br>
                  <strong>And more</strong>
                </p>
              </div>
            </div>
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
