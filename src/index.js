import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProviderComponent } from "./context/ThemeContext";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("🚀 Rendering React app...");

root.render(
  <React.StrictMode>
    <ThemeProviderComponent>
      <App />
    </ThemeProviderComponent>
  </React.StrictMode>
);
