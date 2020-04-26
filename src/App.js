import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { ConnectedDashboard } from "./Dashboard";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        Dashboard goes here.
        <ConnectedDashboard />
      </div>
    </Provider>
  );
}

export default App;
