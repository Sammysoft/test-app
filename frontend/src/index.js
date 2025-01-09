import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
// import { ToastContainer } from "react-toastify";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <ToastContainer /> */}
    <App />
  </BrowserRouter>
);
