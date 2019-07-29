import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import SmoothScroll from "../components/SmoothScroll";
import Navbar from "../components/Navbar";
import Work from "./Work";
import About from "./About";

function Routes() {
  return (
    <Router>
      <>
        <Navbar />
        <SmoothScroll>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/about" component={About} />
          </Switch>
        </SmoothScroll>
      </>
    </Router>
  );
}

export default Routes;
