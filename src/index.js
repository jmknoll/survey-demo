import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

export const init = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
