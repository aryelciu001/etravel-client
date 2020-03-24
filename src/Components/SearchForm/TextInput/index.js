import React, { Component } from "react";

import "./index.css";

class TextInput extends Component {
  state = {
    value: "",
    suggestions: [],
    show: true,
    cities: []
  };

  onChange = e => {
    const { array } = this.props;
    this.setState({ ...this.state, value: e.target.value }, () => {
      var suggestions;
      const { value } = this.state;
      if (array === undefined) return;
      if (value !== "") {
        suggestions = array
          .filter(el => el.name.toLowerCase().includes(value.toLowerCase()))
          .slice(0, 5);
      } else {
        suggestions = [];
      }
      this.setState({ ...this.state, suggestions });
    });
  };

  renderSuggestions() {
    const { suggestions, lifeline } = this.state;
    if (suggestions.length === 0 || lifeline === 0) {
      return null;
    } else {
      return (
        <div className="text-input-ac">
          <ul>
            {this.state.suggestions.map(el => (
              <li
                key={el.name}
                onClick={e => this.selectSuggestion(e, el.name)}
              >
                {el.name}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

  selectSuggestion = (e, val) => {
    e.stopPropagation();
    this.setState({ ...this.state, value: val, suggestions: [] }, () => {
      this.props.onSelect(this.state.value, this.props.name);
    });
  };

  onBlur = () => {
    setTimeout(() => {
      this.setState({ ...this.state, suggestions: [] });
    }, 200);
  };

  render() {
    return (
      <div className="text-input" onBlur={this.onBlur}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.onChange}
        ></input>
        {this.renderSuggestions()}
      </div>
    );
  }
}

export default TextInput;
