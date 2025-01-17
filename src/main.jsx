import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { AboutPage } from "./pages/AboutPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";

import App from "./App.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
