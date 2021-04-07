import React, { Component, Fragment, lazy, Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../static/css/main.css";
import Styles from "./globalStyles";
// import HomeScreen from "../src/pages/HomeScreen";
// import DashboardScreen from "../src/pages/DashboardScreen";
// import SearchScreen from "../src/pages/SearchScreen";
// import DiscoverScreen from "../src/pages/DiscoverScreen";


const SeekerHomeScreen = lazy(() => import("./pages/SeekerHomeScreen"));
const MentorHomeScreen = lazy(() => import("./pages/MentorHomeScreen"));
const DashboardScreen = lazy(() => import("../src/pages/DashboardScreen"));
const SearchScreen = lazy(() => import("../src/pages/SearchScreen"));
const DiscoverScreen = lazy(() => import("../src/pages/DiscoverScreen"));
const LoginScreen = lazy(() => import("../src/pages/LoginScreen"));

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
                  <Route path="/" component={SeekerHomeScreen} exact />
                  <Route path="/mentor" component={MentorHomeScreen} exact />
                  <Route path="/dashboard" component={DashboardScreen} />
                  <Route path="/search" component={SearchScreen} />
                  <Route path="/discover" component={DiscoverScreen} />
                  <Route path="/login" component={LoginScreen} />
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
