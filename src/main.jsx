import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DataShareCenterContext } from "./context/DataShareCenter.jsx";
import GeneratePassword from "./functions/GeneratePassword.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataShareCenterContext>
      <App />
      <GeneratePassword />
      <ToastContainer />
    </DataShareCenterContext>
  </React.StrictMode>
);
