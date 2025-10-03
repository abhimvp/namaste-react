import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent - constructor");
  }
  componentDidMount() {
    // console.log(" Parent - componentDidMount");
  }
  render() {
    // console.log("Parent - render");
    return (
      <div>
        <h1>About class component</h1>
        <UserClass name={"Abhishek(class)"} location={"hyderabad ra mawa"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <p>
//         We are a food delivery service committed to bringing you the best dining
//         experience.
//       </p>
//       {/* <User name={"Abhishek(function)"} /> */}
//       <UserClass name={"Abhishek(class)"} location={"hyderabad ra mawa"} />
//     </div>
//   );
// };

export default About;
