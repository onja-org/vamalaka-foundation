import React from "react";
import "./App.css";
import { HomePage } from "./Pages/HomePage";
import { RoleSelectOnboard } from "./components/RoleSelectionOnboard/RoleSelectionOnBoard";
import { Route, Switch } from "react-router";
import { Paths } from "./components/helpers/routeHelper";
import OnboardingRegistration from "./Pages/OnboardingRegistration";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={Paths.HOME} component={HomePage} />
        <Route exact path={Paths.LOGIN}>
          <h2>Login page will be here</h2>
        </Route>
        <Route path={Paths.REGISTER} component={OnboardingRegistration} />
      </Switch>
    </div>
  );
}

export default App;
