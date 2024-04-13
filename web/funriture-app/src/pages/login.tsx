import React, { useState } from "react";
import AppHeader from "../components/header";
import Loginform from "../components/auth/login-form";
import Singup from "../components/auth/singup-form";
import { Button } from "antd";

const Login = () => {
  const [isLogin, setdata] = useState(true);

  const handleClick = () => {
    setdata((isLogin) => !isLogin);
  };
  return (
    <>
      <AppHeader />
      <div className="login-main">
        <div className="login-sign-div">
          {isLogin ? <Loginform /> : <Singup />}
          <a onClick={handleClick}>
            {isLogin
              ? "Create a Account ? signup"
              : "You Are Already Member Login"}
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
