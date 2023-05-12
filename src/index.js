import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
const myName = "Alexander";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App name={myName} />
  </React.StrictMode>
);
