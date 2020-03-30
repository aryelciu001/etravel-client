import React, { Component } from "react";
import "./App.css";

//importing components
import HomePage from "./Components/HomePage";
import QueryResult from "./Components/QueryResult";
import QueryResultDetail from "./Components/QueryResultDetail";
import LandingPage from "./Components/LandingPage";
import ProfilingTest from "./Components/ProfilingTest";

//dummy result
import { result } from "./test";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  withRouter
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
    const url = "http://localhost:5000/profiles/afterLogin";
    var token;
    try {
      token = JSON.parse(localStorage["token"]);
      console.log(token.expiry);
      console.log(new Date().valueOf());
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
                  <LandingPage login={this.login}></LandingPage>
                </Route>

                {/* protected */}
                <Route
                  path="/queryresult/:index"
                  exact
                  results={this.state.queryResult}
                  render={routeProps => {
                    if (this.state.user !== null) {
                      return (
                        <QueryResultDetail
                          params={routeProps}
                          results={this.state.queryResult}
                        ></QueryResultDetail>
                      );
                    } else {
                      return <Redirect to="/landing" />;
                    }
                  }}
                ></Route>

                {/* protected */}
                <Route
                  path="/queryresult"
                  exact
                  render={routeProps => {
                    if (this.state.user !== null) {
                      return (
                        <QueryResult
                          results={this.state.queryResult}
                        ></QueryResult>
                      );
                    } else {
                      return <Redirect to="/landing" />;
                    }
                  }}
                ></Route>

                {/* protected */}
                <Route
                  path="/"
                  exact
                  render={routeProps => {
                    if (this.state.user !== null) {
                      return <HomePage></HomePage>;
                    } else {
                      return <Redirect to="/landing" />;
                    }
                  }}
                ></Route>
                <Route
                  path="/profilingtest"
                  exact
                  render={routeProps => {
                    if (this.state.user !== null) {
                      return (
                        <ProfilingTest
                          curUser={this.state.user}
                        ></ProfilingTest>
                      );
                    } else {
                      return <Redirect to="/landing" />;
                    }
                  }}
                ></Route>
                <Route
                  path="/profile"
                  render={routeProps => {
                    if (this.state.user !== null) {
                      return <ProfilePage user={this.state.user} />;
                    } else {
                      return <Redirect to="/landing" />;
                    }
                  }}
                />
                <Route
                  path="*"
                  render={routeProps => {
                    return "404 not found";
                  }}
                ></Route>
              </Switch>
            </div>
          </Router>
        ) : null}
      </React.Fragment>
    );
  }
}

export default App;
