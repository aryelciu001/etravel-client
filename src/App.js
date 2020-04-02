import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { ReactComponent as Logo } from "./Assets/Images/Eclipse-0.5s-230px.svg";

//importing components
import HomePage from "./Components/HomePage";
import QueryResult from "./Components/QueryResult";
import QueryResultDetail from "./Components/QueryResultDetail";
import LandingPage from "./Components/LandingPage";
import ProfilingTest from "./Components/ProfilingTest";
import ProtectedRoute from "./ProtectedRoute";
import NotFoundPage from "./Components/NotFoundPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import ProfilePage from "./Components/ProfilePage";

class App extends Component {
  state = {
    queryResult: [],
    user: null,
    isAuthenticated: false,
    isLoading: false
  };

  componentDidMount = () => {
    this.setState({ ...this.state, queryResult: [] }, () => {
      this.authenticate();
    });
  };

  query = body => {
    const api = process.env.REACT_APP_API_URL;
    const url = `${api}/travelPlan`;
    const toBeSent = {
      user: this.state.user._id,
      ...body
    };
    this.setState({ ...this.state, isLoading: true }, () => {
      axios
        .post(url, toBeSent)
        .then(response => {
          this.setState(
            {
              ...this.state,
              queryResult: response.data,
              isLoading: false
            },
            () => {
              this.props.history.push("/queryresult");
            }
          );
        })
        .catch(err => {
          this.setState({
            ...this.state,
            queryResult: [],
            isLoading: false
          });
        });
    });
  };

  authenticate = () => {
    const axios = require("axios");
    const api = process.env.REACT_APP_API_URL;
    const url = `${api}/profiles/afterLogin`;
    var token;
    try {
      token = JSON.parse(localStorage["token"]);
      if (token.expiry < new Date().valueOf()) {
        localStorage.removeItem("token");
        this.setState({ ...this.state, user: null, isAuthenticated: true });
      } else {
        const headers = {
          "auth-token": token.value
        };
        axios.get(url, { headers }).then(res => {
          this.setState({
            ...this.state,
            user: res.data[0],
            isAuthenticated: true
          });
        });
      }
    } catch (e) {
      this.setState({ ...this.state, user: null, isAuthenticated: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.isAuthenticated ? (
          <div className="App">
            {this.state.isLoading ? (
              <div className="loading">
                <Logo />
              </div>
            ) : null}
            <Switch>
              {/* not protected */}

              <Route path="/landing">
                {this.state.user === null ? (
                  <LandingPage login={this.login}></LandingPage>
                ) : (
                  <Redirect to="/"></Redirect>
                )}
              </Route>

              <ProtectedRoute
                path="/profilingtest"
                exact={true}
                results={this.state.queryResult}
                user={this.state.user}
                component={ProfilingTest}
              ></ProtectedRoute>

              <ProtectedRoute
                path="/profile"
                exact={true}
                user={this.state.user}
                component={ProfilePage}
              ></ProtectedRoute>

              <ProtectedRoute
                path="/queryresult/:index"
                exact={true}
                results={this.state.queryResult}
                user={this.state.user}
                component={QueryResultDetail}
              ></ProtectedRoute>

              <ProtectedRoute
                path="/queryresult"
                exact={true}
                results={this.state.queryResult}
                user={this.state.user}
                component={QueryResult}
              ></ProtectedRoute>

              <ProtectedRoute
                path="/"
                exact={true}
                user={this.state.user}
                query={this.query}
                component={HomePage}
              ></ProtectedRoute>

              <ProtectedRoute
                path="*"
                exact={false}
                component={NotFoundPage}
              ></ProtectedRoute>
            </Switch>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default withRouter(App);
