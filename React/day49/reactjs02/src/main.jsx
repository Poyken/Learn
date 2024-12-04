import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store/store.js";
import Provider from "./store/Provider.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
