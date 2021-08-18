import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import HomeView from "./pages/HomeView";
import AdminView from "./pages/AdminView";
import Foundationsview from "./pages/FoundationsView";
import NotFound from "./pages/NotFound"
import HeaderNav from "./components/HeaderNav";
import Footer from "./components/Footer"
import SignInForm from "./components/SignInForm"
import RegistrationModal from "./components/RegistrationModal";

function App() {
  return (
    <Router>
      <HeaderNav />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/AdminView" component={AdminView} />
        <Route exact path="/FoundationsView" component={Foundationsview} />
        <Route exact path="*" component={NotFound} />
      </Switch>
      <Footer />
      <SignInForm />
			<RegistrationModal />
    </Router>
  );
}

export default App;
