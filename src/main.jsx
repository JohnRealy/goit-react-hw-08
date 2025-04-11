import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "../index.css";
import "modern-normalize";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    <Toaster position="top-right" toastOptions={{ duration: 1000 }} />
  </React.StrictMode>
);
