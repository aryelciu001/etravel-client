import React, { Component } from "react";

import { question } from "./question";

import Button from "../Button";

import uparrow from "./up-arrow.png";
import downarrow from "./down-arrow.png";

import "./index.css";

class ProfilingTest extends Component {
  state = {
    curIndex: 0,
    answer: "",
    questions: question,
    curAnswers: [],
    toBeSent: {}
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      curAnswers: question[this.state.curIndex].answers
    });
  }

  Question = props => {
    return <div className="pt-question">{props.text}</div>;
  };

  Answers = props => {
    return (
      <div className="pt-answers">
        <ul>
          {this.state.curAnswers.map((el, index) => {
            return (
              <li>
                {el}
                <div className="updown">
                  <img
                    src={uparrow}
                    onClick={() => {
                      this.uparrow(index);
                    }}
                  />
                  <img
                    src={downarrow}
                    onClick={() => {
                      this.downarrow(index);
                    }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  uparrow = index => {
    if (index === 0) return;
    var { curAnswers } = this.state;
    var curAnswer = curAnswers[index];
    curAnswers.splice(index, 1);
    curAnswers.splice(index - 1, 0, curAnswer);
    this.setState({ ...this.state, curAnswers });
  };

  downarrow = index => {
    if (index === this.state.curAnswers.length) return;
    var { curAnswers } = this.state;
    var curAnswer = curAnswers[index];
    curAnswers.splice(index, 1);
    curAnswers.splice(index + 1, 0, curAnswer);
    this.setState({ ...this.state, curAnswers });
  };

  next = () => {
    var { curIndex, questions, toBeSent, curAnswers } = this.state;
    console.log(curIndex, question.length);
    toBeSent[questions[curIndex].for] = curAnswers;
    if (curIndex + 1 === question.length) {
      this.setState(
        {
          ...this.state,
          toBeSent
        },
        () => {
          const axios = require("axios");
          toBeSent.user = this.props.curUser._id;
          console.log(toBeSent);
          axios
            .post("http://localhost:5000/profres/addprofres", toBeSent)
            .then(res => {
              console.log(res);
            });
          // window.location.replace("/");
        }
      );
    } else {
      this.setState({
        ...this.state,
        curIndex: ++curIndex,
        curAnswers: question[curIndex].answers,
        toBeSent
      });
    }
  };

  prev = () => {
    const { curIndex, questions } = this.state;
    if (curIndex - 1 >= 0) {
      this.setState({
        ...this.state,
        curIndex: --this.state.curIndex,
        curAnswers: question[this.state.curIndex].answers
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="pt-container">
          <div className="pt-form">
            <React.Fragment>
              <this.Question
                text={this.state.questions[this.state.curIndex].question}
              />
              <this.Answers />
            </React.Fragment>
            <div className="pt-btn">
              <Button onClick={this.prev} text="Back"></Button>
              <Button onClick={this.next} text="Next"></Button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProfilingTest;
