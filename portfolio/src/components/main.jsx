import React from "react";
import ReactDOM from "react-dom/client";
import App from "../components/app"
import {SubmitButton,Footer} from "../components/app";
import { CartWithout } from "./cart";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
    <CartWithout/> 
  </React.StrictMode>
);

