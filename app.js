import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", xy: "aaa" },
  "Hello World from Namaste React!!!"
);

// console.log(heading);
// get root element
const root = ReactDOM.createRoot(document.getElementById("root"));
// render h1 tag
root.render(heading);
