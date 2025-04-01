import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProviderComponent } from "./context/ThemeContext";
import Context from "./context/orderContext";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProviderComponent>
      <App />
    </ThemeProviderComponent>
   
  </React.StrictMode>
);
