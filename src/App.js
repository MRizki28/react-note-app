import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Notes from "./pages/Notes";

export default function BasicExample() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Notes} />
        </Switch>
      </>
    </Router>
  );
}


