import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "./index.css";
import "react-datepicker/dist/react-datepicker.css";

import TextInput from "./TextInput";
import Button from "../Button";

class SearchForm extends Component {
  state = {
    fromDate: new Date(),
    toDate: new Date(),
    origin: "",
    destination: "",
    cities: [],
    recommendShow: "",
    recommendations: "",
    err: ""
  };

  componentDidMount() {
    //fetch all the cities for recommendation (auto complete)
    const cities = require("cities.json");
    this.setState({ ...this.state, cities });
  }

  //handle state changes on input
  onSelect = (val, name) => {
    this.setState({ ...this.state, [name]: val, err: "" });
  };

  handleDateChangeFrom = date => {
    this.setState({ ...this.state, fromDate: date });
  };
  handleDateChangeTo = date => {
    this.setState({ ...this.state, toDate: date });
  };

  search = () => {
    var { fromDate, toDate, origin, destination } = this.state;
    var error = "";

    if (!origin) {
      error = "Your origin is empty!";
    } else if (!destination) {
      error = "Your destination is empty!";
    } else if (toDate <= fromDate) {
      error = "Your return date is earlier than your departure date!";
    } else if (origin === destination) {
      error = "Your origin cannot be the same as your destination";
    }

    if (error) {
      this.setState({ ...this.state, err: error }, () => {
        return;
      });
    } else {
      var day =
        String(fromDate.getUTCDate()).length > 1
          ? String(fromDate.getUTCDate())
          : "0" + String(fromDate.getUTCDate());
      var month =
        String(fromDate.getUTCMonth()).length > 1
          ? String(fromDate.getUTCMonth() + 1)
          : "0" + String(fromDate.getUTCMonth() + 1);
      var year = String(fromDate.getUTCFullYear());

      fromDate = `${year}-${month}-${day}`;

      day =
        String(toDate.getUTCDate()).length > 1
          ? String(toDate.getUTCDate())
          : "0" + String(toDate.getUTCDate());
      month =
        String(toDate.getUTCMonth()).length > 1
          ? String(toDate.getUTCMonth() + 1)
          : "0" + String(toDate.getUTCMonth() + 1);
      year = String(toDate.getUTCFullYear());

      toDate = `${year}-${month}-${day}`;

      const axios = require("axios");

      this.props.query({
        source: origin,
        destination: destination,
        departureDate: fromDate,
        returnDate: toDate
      });
    }
  };

  Feedback = () => {
    if (this.state.err) {
      return <div className="feedback">{this.state.err}</div>;
    } else {
      return null;
    }
  };

  render() {
    return (
      <div className="search-form">
        <h1>You Travel, We Plan It</h1>
        <div className="input-box">
          <label>Origin</label>
          <div className="src from-city">
            <TextInput
              value={this.state.origin}
              name="origin"
              array={this.state.cities}
              onSelect={this.onSelect}
            ></TextInput>
          </div>
        </div>
        <div className="input-box">
          <label>Destination</label>
          <div className="src to-city">
            <TextInput
              value={this.state.destination}
              name="destination"
              array={this.state.cities}
              onSelect={this.onSelect}
            ></TextInput>
          </div>
        </div>
        <div className="input-box">
          <label>From</label>
          <div className="src from-date">
            <DatePicker
              selected={this.state.fromDate}
              onChange={this.handleDateChangeFrom}
            />
          </div>
        </div>
        <div className="input-box">
          <label>To</label>
          <div className="src to-date">
            <DatePicker
              selected={this.state.toDate}
              onChange={this.handleDateChangeTo}
            />
          </div>
        </div>
        <div className="btn-container">
          <Button text="Search" onClick={this.search}></Button>
        </div>
        {this.Feedback()}
      </div>
    );
  }
}

export default SearchForm;
