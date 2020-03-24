import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "./index.css";
import "react-datepicker/dist/react-datepicker.css";

import TextInput from "./TextInput";
import Button from "../Button";

class SearchForm extends Component {
  state = {
    fromDate: "",
    toDate: "",
    fromCity: "",
    toCity: "",
    cities: [],
    recommendShow: "",
    recommendations: ""
  };

  componentDidMount() {
    //fetch all the cities for recommendation (auto complete)
    const cities = require("cities.json");
    this.setState({ ...this.state, cities });
  }

  //handle state changes on input
  onSelect = (val, name) => {
    this.setState({ ...this.state, [name]: val });
  };

  handleDateChangeFrom = date => {
    this.setState({ ...this.state, fromDate: date });
  };
  handleDateChangeTo = date => {
    this.setState({ ...this.state, toDate: date });
  };

  render() {
    return (
      <div className="search-form">
        <h1>You Travel, We Plan It</h1>
        <div className="input-box">
          <label>Depart From</label>
          <div className="src from-city">
            <TextInput
              value={this.state.fromCity}
              name="fromCity"
              array={this.state.cities}
              onSelect={this.onSelect}
            ></TextInput>
          </div>
        </div>
        <div className="input-box">
          <label>Travel To</label>
          <div className="src to-city">
            <TextInput
              value={this.state.fromCity}
              name="toCity"
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
          <Button text="Search"></Button>
        </div>
      </div>
    );
  }
}

export default SearchForm;
