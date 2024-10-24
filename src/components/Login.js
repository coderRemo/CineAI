import React from "react";
import Header from "./Header";
import { LOGIN_BACKGROUND_IMAGE } from "../utils/constant";

const Login = () => {
  return (
    <div>
      <Header />
      <div>
        <img src={LOGIN_BACKGROUND_IMAGE} alt="login-background-image" />
      </div>
    </div>
  );
};

export default Login;
