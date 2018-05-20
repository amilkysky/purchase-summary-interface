import React from "react";
import { Provider } from "react-redux";
import store from "../js/configureStore";
import { render } from "react-dom";
import App from "./App";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
