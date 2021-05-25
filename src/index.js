import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.css";
import SearchResultsProvider from "./providers/SearchResults";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <SearchResultsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SearchResultsProvider>,
  document.getElementById("root")
);
