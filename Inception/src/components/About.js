import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About us page!! (From class Component)</h1>
        <h2>Kindly find the details about this page</h2>

        <UserClass />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About us page!!</h1>
//       <h2>Kindly find the details about this page</h2>

//       <UserClass name={"Bhargav Kalangi (class component)"} />
//     </div>
//   );
// };
export default About;
