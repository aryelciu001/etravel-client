import React, { Component } from "react";

import Navbar from "../Navbar";
import RecommendationBox from "../RecommendationBox";
import SearchForm from "../SearchForm";

import "./index.css";
import Button from "../Button";
import { Redirect } from "react-router-dom";

class HomePage extends Component {
  state = {
    recommendations: [
      {
        imgurl:
          "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=949&q=80",
        name: "Singapore"
      },
      {
        imgurl:
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        name: "Bali"
      },
      {
        imgurl:
          "https://images.unsplash.com/photo-1532745609869-16df0d287f3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        name: "Kuala Lumpur"
      },
      {
        imgurl:
          "https://images.unsplash.com/photo-1575348021159-aa1d0d95eac5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
        name: "Bangkok"
      },
      {
        imgurl:
          "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        name: "New York"
      }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div className="after-navbar">
          <div className="hp-recommend">
            <div>
              {this.state.recommendations.map(el => (
                <RecommendationBox
                  key={el.name}
                  name={el.name}
                  url={el.imgurl}
                ></RecommendationBox>
              ))}
            </div>
          </div>
          <SearchForm></SearchForm>
          <div className="retake-btn">
            <Button
              text="Retake Profiling Test"
              onClick={() => {
                window.location.replace("/profilingtest");
              }}
            ></Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
