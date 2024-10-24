import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  //   console.log(err);

  return (
    <div className="text-center">
      <h2>Something went wrong!! 😨</h2>
      <h3 className="font-bold">
        {err.status} {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
