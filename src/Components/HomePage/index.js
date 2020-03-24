import React, { Component } from "react";

import Navbar from "../Navbar";
import RecommendationBox from "../RecommendationBox";
import SearchForm from "../SearchForm";

import "./index.css";

class HomePage extends Component {
  state = {
    recommendations: [
      {
        imgurl:
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        name: "Bali"
      },
      {
        imgurl:
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        name: "Bali"
      },
      {
        imgurl:
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        name: "Bali"
      },
      {
        imgurl:
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        name: "Bali"
      },
      {
        imgurl:
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        name: "Bali"
      },
      {
        imgurl:
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        name: "Bali"
      },
      {
        imgurl:
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        name: "Bali"
      },
      {
        imgurl:
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        name: "Bali"
      },
      {
        imgurl:
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        name: "Bali"
      },
      {
        imgurl:
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        name: "Bali"
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
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
