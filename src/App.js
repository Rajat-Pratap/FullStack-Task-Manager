import React, { Component } from "react";
import { Provider } from "react-redux";
import { ConnectedDashboard } from "./Dashboard";
import { ConnectedNavigation } from "./Navigation";
import { store } from "./store";
import { Router, Route } from "react-router-dom";
import { ConnectedLogin } from "./Login";
import { history } from "./store/history";
import { ConnectedTaskDetail } from "./TaskDetails";
import { Redirect } from "react-router";

const RouteGuard = (Component) => ({ match }) => {
  console.info("Route guard: ", match);
  if (!store.getState().session.authenticated) {
    //reroute
    return <Redirect to="/" />;
  }
  return <Component match={match} />;
};

function App() {
  return (
    <Router history={history}>
      <Provider store={store}>
        <div className="App">
          <ConnectedNavigation />
          <Route exact path="/" component={ConnectedLogin} />
          <Route
            exact
            path="/dashboard"
            render={RouteGuard(ConnectedDashboard)}
          />
          <Route
            exact
            path="/task/:id"
            render={RouteGuard(ConnectedTaskDetail)}
          />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
