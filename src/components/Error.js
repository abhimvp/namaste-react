import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
//   console.log(error);

  return (
    <div>
      <h1>Oops!</h1>
      <h2>{error.statusText || error.message}</h2>
      <p>Something went wrong. Please try again later.</p>
    </div>
  );
};

export default Error;
