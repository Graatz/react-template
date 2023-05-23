import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/_index.tsx";
import "./styles/normalize.scss";
import "./styles/styles.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
