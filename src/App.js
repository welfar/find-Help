import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import HomeView from "./pages/HomeView";
import Foundationsview from "./pages/FoundationsView";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound"
import HeaderNav from "./components/HeaderNav";

function App() {
  return (
    <Router>
      <HeaderNav />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/FoundationsView" component={Foundationsview} />
        <Route exact path="/Shop" component={Shop} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
