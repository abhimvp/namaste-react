import React from "react";
import { useState } from "react";

const User = (props) => {
    const [count,setCount] = useState(0);
    const [count2] = useState(1);
  return (
    <div className="user-card">
      <h1>User Profile</h1>
      <h2>Count: {count}</h2>
      <h2>Count2: {count2}</h2>
      <h2>Name: {props.name}</h2>
      <h3>Location: Hyderabad</h3>
      <h4>Email: abhishek@example.com</h4>
      <p>Here you can manage your account settings.</p>
    </div>
  );
};

export default User;
