import React, { Component } from "react";
import { render } from "react-dom";
import { Main } from "./App";
import { Provider, connect } from "react-redux";
const app = document.querySelector("#app");
import store from "./store";

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  app
);
