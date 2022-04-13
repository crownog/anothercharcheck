import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";
import { AnotherProvider } from "./contexts";

ReactDOM.render(
  <React.StrictMode>
    <AnotherProvider>
      <App />
    </AnotherProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
