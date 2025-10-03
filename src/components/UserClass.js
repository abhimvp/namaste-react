// class-based component for user profile
import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Dummy location",
        avatar_url: "https://via.placeholder.com/150",
      },
    };
    console.log("mounting phase - constructor");
  }

  async componentDidMount() {
    // Simulating an API call
    const data = await fetch("https://api.github.com/users/abhimvp");
    const json = await data.json();
    // console.log(json);
    console.log("updating - componentDidMount");
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("updating - componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("unmounting - componentWillUnmount");
  }
  render() {
    // console.log("render", this.props.name);
    console.log("mounting phase - render");
    const { name, location, avatar_url } = this.state.userInfo;
    // debugger; //- lovely tool to debug
    // const { name, location } = this.props;
    return (
      <div className="user-card">
        <img src={avatar_url} width={200} alt="User Avatar" height={200} />
        <h1>User Profile</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Email: abhishek@example.com</h4>
        <p>Here you can manage your account settings.</p>
      </div>
    );
  }
}

export default UserClass;
