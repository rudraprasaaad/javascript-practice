import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App-memo.jsx";

createRoot(document.getElementById("root")).render(<App />);
