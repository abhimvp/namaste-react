const heading = React.createElement(
  "h1",
  { id: "heading", xy: "aaa" },
  "Hello World from React!!!"
);

console.log(heading);
// get root element
const root = ReactDOM.createRoot(document.getElementById("root"));
// render h1 tag
root.render(heading);
