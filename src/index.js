import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Landing_view from "../src/components/Landing_view";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Landing_view />
  </React.StrictMode>,
  rootElement
);
