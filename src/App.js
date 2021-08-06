import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import HomeView from "./pages/HomeView";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeView} />
      </Switch>
    </Router>
  );
}

export default App;
