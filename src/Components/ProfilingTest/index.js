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
    curAnswers: []
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
    const { curIndex, questions } = this.state;
    if (curIndex + 1 === question.length) {
      window.location.replace("/");
    } else {
      this.setState({ ...this.state, curIndex: ++this.state.curIndex });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="pt-container">
          <div className="pt-form">
            {this.state.questions.map((el, index) => {
              return (
                <React.Fragment>
                  <this.Question text={el.question} />
                  <this.Answers />
                </React.Fragment>
              );
            })}
            <div className="pt-btn">
              <Button onClick={this.next} text="Next"></Button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProfilingTest;
