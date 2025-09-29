import React from "react";
import ReactDOM from "react-dom/client";
//  import component from path of that component
import Header from "./components/Header";
import Body from "./components/Body";
// import resList from "./utils/mockData";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
