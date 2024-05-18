import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LandingPage from "./pages/landing/landing.page";

const htmlRoot: HTMLElement = document.getElementById("root") as HTMLElement;

const rootElement = ReactDOM.createRoot(htmlRoot);

//jsx
rootElement.render(
  <React.StrictMode>
    <LandingPage name="Pradip Sapkota" email="pradip57@gmail.com" address="Sitapaila" />
  </React.StrictMode>
);
