import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Home from "./components/Home";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
