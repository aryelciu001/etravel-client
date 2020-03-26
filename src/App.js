import React, { Component } from "react";
import "./App.css";

//importing components
import HomePage from "./Components/HomePage";
import QueryResult from "./Components/QueryResult";
import QueryResultDetail from "./Components/QueryResultDetail";
import LandingPage from "./Components/LandingPage";

import auth from "./auth";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class App extends Component {
  componentDidMount = () => {
    this.setState({ ...this.state, isLoggedIn: auth.isAuthenticated });
  };

  state = {
    queryResult: [
      {
        hotel: {
          name: "JW Marriot",
          bg:
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          price: "70"
        },
        flight: {
          logo:
            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
          name: "Singapore Airline",
          price: "70"
        },
        itenerary: {
          logo:
            "https://images.unsplash.com/photo-1521336575822-6da63fb45455?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          price: "90",
          name: "Classic Adventure"
        }
      },
      {
        hotel: {
          name: "JW Marriot",
          bg:
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          price: "70"
        },
        flight: {
          logo:
            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
          name: "Singapore Airline",
          price: "70"
        },
        itenerary: {
          logo:
            "https://images.unsplash.com/photo-1521336575822-6da63fb45455?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          price: "90",
          name: "Classic Adventure"
        }
      },
      {
        hotel: {
          name: "JW Marriot",
          bg:
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          price: "70"
        },
        flight: {
          logo:
            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
          name: "Singapore Airline",
          price: "70"
        },
        itenerary: {
          logo:
            "https://images.unsplash.com/photo-1521336575822-6da63fb45455?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          price: "90",
          name: "Classic Adventure"
        }
      }
    ],
    isLoggedIn: false
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            {/* not protected */}
            <Route path="/landing">
              <LandingPage></LandingPage>
            </Route>

            {/* protected */}
            <Route
              path="/queryresult/:index"
              exact
              results={this.state.queryResult}
              render={routeProps => {
                return (
                  <QueryResultDetail
                    params={routeProps}
                    results={this.state.queryResult}
                  ></QueryResultDetail>
                );
              }}
            ></Route>

            {/* protected */}
            <Route path="/queryresult" exact>
              <QueryResult results={this.state.queryResult}></QueryResult>
            </Route>

            {/* protected */}
            <Route
              path="/"
              exact
              render={routeProps => {
                if (this.state.isLoggedIn) {
                  return <HomePage></HomePage>;
                } else {
                  return <Redirect to="/landing" />;
                }
              }}
            ></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
