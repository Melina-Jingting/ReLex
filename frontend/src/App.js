import React, { Component, Fragment, lazy, Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../static/css/main.css";
import Styles from "./globalStyles";

const HomeScreen = lazy(() => import("../src/pages/HomeScreen"));
const DashboardScreen = lazy(() => import("../src/pages/DashboardScreen"));
const SearchScreen = lazy(() => import("../src/pages/SearchScreen"));
const DiscoverScreen = lazy(() => import("../src/pages/DiscoverScreen"));

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
                <Suspense fallback={<div>Loading page...</div>}>
                  <Route path="/" component={HomeScreen} exact />
                  <Route path="/dashboard" component={DashboardScreen} />
                  <Route path="/search" component={SearchScreen} />
                  <Route path="/discover" component={DiscoverScreen} />
                </Suspense>
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
