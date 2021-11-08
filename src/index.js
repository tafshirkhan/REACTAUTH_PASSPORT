import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Common/Header";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";

//set main base url
axios.defaults.baseURL = "http://127.0.0.1:8000/api";
//Authorization Bearer token
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
