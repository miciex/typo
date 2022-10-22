import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/cjs/react-dom.production.min";
import App from "./app/App";
//rendering the app
const root = createRoot(document.getElementById("root"));

root.render(<App />);
