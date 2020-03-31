import React, { Component } from "react";
import "./App.css";

//importing components
import HomePage from "./Components/HomePage";
import QueryResult from "./Components/QueryResult";
import QueryResultDetail from "./Components/QueryResultDetail";
import LandingPage from "./Components/LandingPage";
import ProfilingTest from "./Components/ProfilingTest";
import ProtectedRoute from "./ProtectedRoute";
import NotFoundPage from "./Components/NotFoundPage";

//dummy result
import { result } from "./test";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProfilePage from "./Components/ProfilePage";

class App extends Component {
  state = {
    queryResult: [],
    user: null,
    isAuthenticated: false
  };

  componentDidMount = () => {
    this.setState({ ...this.state, queryResult: result }, () => {
      this.authenticate();
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
          <Router>
            <div className="App">
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
                  component={HomePage}
                ></ProtectedRoute>

                <ProtectedRoute
                  path="*"
                  exact={false}
                  component={NotFoundPage}
                ></ProtectedRoute>
              </Switch>
            </div>
          </Router>
        ) : null}
      </React.Fragment>
    );
  }
}

export default App;
