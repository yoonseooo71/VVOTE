import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";
import { Provider } from "react-redux";
import store from "./lib/store/store";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Root/>
  </Provider>
);
