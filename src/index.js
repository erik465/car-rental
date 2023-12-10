import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import GlobalStyle from "./globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /*<React.StrictMode>*/
  <BrowserRouter basename="https://car-rental-ukraine.netlify.app/">
    <Provider store={store}>
      <App />
      <GlobalStyle />
    </Provider>
  </BrowserRouter>
  /*</React.StrictMode>*/
);
