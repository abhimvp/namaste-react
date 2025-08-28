import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// Babel transpiles JSX to React.createElement calls
const jsxHeading = (
  <h1 id="heading" className="jsx">
    Namaste React using JSX{" "}
  </h1>
); // use () - to write JSX in multiple lines.

// console.log(jsxHeading);

// React Component - class & functional ones

const Title = () => {
  return (
    <h1 id="heading" className="title" tabIndex="3">
      Namaste React using JSX - Functional Component 2 Title
    </h1>
  );
};

// Same as above - we don't have to write return statement - don't panic next time
// we can write Title component inside HeaderComponent2

const HeadingComponent2 = () => (
  // this is component composition.
  <div id="headingfunctionalcomponent2">
    <Title />
    <Title></Title> {/** Same as above and it works */}
    <h1 id="heading" className="jsx">
      Namaste React using JSX - Functional Component 2
    </h1>
  </div>
);

const num = 1000000;

// normal javascript variable - react element
const titleElement = (
  <h2 id="heading">
    Namaste React using JSX - Functional Component 2 title react element
  </h2>
);

// React Functional component is just a javascript function. Name it with Capital Letter. Which returns some JSX.
const HeadingComponent = () => {
  return (
    <div id="container">
      <HeadingComponent2 />
      {Title()} {/* we can also call component like normal function */}
      <h1>{num + 356789}</h1>{" "}
      {/* we can use JS expressions inside JSX using {} */}
      {/* Even console.log works */}
      {console.log("Hello World")}
      {titleElement}
      {/* As soon as component is rendered the code in {} gets executed. */}
      <h1 id="heading" className="jsx">
        
        Namaste React using JSX - Functional Component
      </h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
// This is how you render Functional Components
root.render(<HeadingComponent />); // syntax babel understands.
