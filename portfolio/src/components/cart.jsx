import React from "react";

// without jsx
export const CartWithout=()=>{
    return React.createContext("div",{id:"first_div"},"Welcome to first div")
}