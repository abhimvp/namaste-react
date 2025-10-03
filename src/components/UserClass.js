// class-based component for user profile
import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Child - constructor");
    console.log("constructor", this.props.name);
    // this is how we create state in class component
    this.state = {
      count: 0,
      count2: 1,
    };
  }

  componentDidMount(){
    console.log("componentDidMount", this.props.name);
    // Make API call here
  }
  render() {
    // has render method -> Returns a piece of JSX
    console.log("render", this.props.name);

    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>User Profile</h1>
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({
              // setState is used to update the state - React will re-render the component - class component
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Email: abhishek@example.com</h4>
        <p>Here you can manage your account settings.</p>
      </div>
    );
  }
}

export default UserClass;
