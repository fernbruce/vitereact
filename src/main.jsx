import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import TodoList from "./8-TodoList/TodoList";
// import App from "./8-三大属性-props";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App appname="react" />{" "}
  </BrowserRouter>
);
