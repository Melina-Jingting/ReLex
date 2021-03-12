import React, { Component } from "react";
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


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <main className="py-3">
            <Container>
              <Route path="/" component={HomeScreen} exact />
              <Route path="/dashboard" component={DashboardScreen} />
              <Route path="/search" component={SearchScreen} />
              <Route path="/discover" component={DiscoverScreen} />
            </Container>
          </main>
        </div>
      </Router>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
