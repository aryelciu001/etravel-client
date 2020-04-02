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
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat"
  };

  render() {
    const { res } = this.state;
    var bg = {};
    if (Object.keys(res).length !== 0) {
      bg = {
        hotel: { background: `url(${this.state.res.hotel[2]})` },
        flightInbound: {
          background: `url(${this.state.res.flight["Inbound"]["flights"][0]["Carrier"]["ImageUrl"]})`
        },
        flightOutbound: {
          background: `url(${this.state.res.flight["Outbound"]["flights"][0]["Carrier"]["ImageUrl"]})`
        },
        itenerary: { background: `url(${this.state.res.itinerary[0]["url"]})` }
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
                <div className="text">
                  <strong>{this.state.res.hotel[0]}</strong>
                  <br></br>
                  {this.state.res.hotel[3]["streetAddress"]}
                  <br></br>
                  {this.state.res.hotel[3]["postalCode"]}
                  <br></br>
                  {this.state.res.hotel[3]["countryName"]}
                </div>
              </div>
              <div className="details1 details-flight details-flight-outbound">
                <div
                  className="pict"
                  style={{ ...bg.flightOutbound, ...this.style }}
                ></div>
                <div className="text">
                  <strong>
                    Airline:{" "}
                    {
                      this.state.res.flight["Outbound"]["flights"][0][
                        "Carrier"
                      ]["Name"]
                    }
                  </strong>

                  <p className="qr1-detail">
                    Flight Number:{" "}
                    {
                      this.state.res.flight["Outbound"]["flights"][0][
                        "Carrier"
                      ]["DisplayCode"]
                    }
                    -
                    {
                      this.state.res.flight["Outbound"]["flights"][0][
                        "FlightNumber"
                      ]
                    }
                    <br></br>
                    Departure Airport:{" "}
                    {this.state.res.flight["Outbound"]["OriginStation"][
                      "Code"
                    ] +
                      " - " +
                      this.state.res.flight["Outbound"]["OriginStation"][
                        "Name"
                      ]}
                    <br></br>
                    Arrival Airport:{" "}
                    {this.state.res.flight["Outbound"]["DestinationStation"][
                      "Code"
                    ] +
                      " - " +
                      this.state.res.flight["Outbound"]["DestinationStation"][
                        "Name"
                      ]}
                    <br></br>
                    Departure Time (Local Time):{" "}
                    {
                      this.state.res.flight["Outbound"]["Departure"].split(
                        "T"
                      )[1]
                    }
                    <br></br>
                    Arrival Time (Local Time):{" "}
                    {this.state.res.flight["Outbound"]["Arrival"].split("T")[1]}
                    <br></br>
                  </p>
                </div>
              </div>
              <div className="details1 details-flight details-flight-inbound">
                <div
                  className="pict"
                  style={{ ...bg.flightInbound, ...this.style }}
                ></div>
                <div className="text">
                  <strong>
                    Airline:{" "}
                    {
                      this.state.res.flight["Inbound"]["flights"][0]["Carrier"][
                        "Name"
                      ]
                    }
                  </strong>

                  <p className="qr1-detail">
                    Flight Number:{" "}
                    {
                      this.state.res.flight["Inbound"]["flights"][0]["Carrier"][
                        "DisplayCode"
                      ]
                    }
                    -
                    {
                      this.state.res.flight["Inbound"]["flights"][0][
                        "FlightNumber"
                      ]
                    }
                    <br></br>
                    Departure Airport:{" "}
                    {this.state.res.flight["Inbound"]["OriginStation"]["Code"] +
                      " - " +
                      this.state.res.flight["Inbound"]["OriginStation"]["Name"]}
                    <br></br>
                    Arrival Airport:{" "}
                    {this.state.res.flight["Inbound"]["DestinationStation"][
                      "Code"
                    ] +
                      " - " +
                      this.state.res.flight["Inbound"]["DestinationStation"][
                        "Name"
                      ]}
                    <br></br>
                    Departure Time (Local Time):{" "}
                    {
                      this.state.res.flight["Inbound"]["Departure"].split(
                        "T"
                      )[1]
                    }
                    <br></br>
                    Arrival Time (Local Time):{" "}
                    {this.state.res.flight["Inbound"]["Arrival"].split("T")[1]}
                    <br></br>
                  </p>
                </div>
              </div>

              {this.state.res.itinerary.map(el => {
                return (
                  <div className="details1 details-itenerary">
                    <div
                      className="pict"
                      style={{
                        background: `url(${el["url"]})`,
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat"
                      }}
                    ></div>
                    <div className="text">{el["name"]}</div>
                  </div>
                );
              })}

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
