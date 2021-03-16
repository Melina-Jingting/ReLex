import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";
import BarChart from "./components/BarChart";

import HomeScreen from "./pages/HomeScreen";
import DashboardScreen from "./pages/DashboardScreen";
import SearchScreen from "./pages/SearchScreen";
import DiscoverScreen from "./pages/DiscoverScreen";

import '../static/css/main.css';
import Styles from './globalStyles';


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Styles />
      <Router>
        <div>
          <main className="pt-3">
            <Fragment>
              <Route path="/" component={HomeScreen} exact />
              <Route path="/dashboard" component={DashboardScreen} />
              <Route path="/search" component={SearchScreen} />
              <Route path="/discover" component={DiscoverScreen} />
            </Fragment>
          </main>
        </div>
      </Router>
      </Fragment>

    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
