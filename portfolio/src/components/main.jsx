import React from "react";
import ReactDOM from "react-dom/client";
import App from "../components/app"
import {SubmitButton,Footer} from "../components/app";
import { CartWithout } from "./cart";
import Counter from "./counter";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App name="sudarshan"/>
    <CartWithout/> 
    <Footer name="sudarshan" cast="khatri"/>
    <div>
       <Counter/>
    </div>
   

  </React.StrictMode>
);

