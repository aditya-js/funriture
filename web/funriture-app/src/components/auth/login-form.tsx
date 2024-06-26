import React, { useState } from "react";
import { Button, Space, Input, Alert } from "antd";
import { useNavigate } from "react-router-dom";
import { userReducer } from "../../store";
import { useDispatch } from "react-redux";
import { login } from "../../queries/users";
import { useQueryClient } from "@tanstack/react-query";

function Loginform() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [validate, setValidate] = useState({
    isEmailValid: true,
    ispasswordvalid: true,
  });
  const nevigate = useNavigate();
  const dispatch = useDispatch();

  const queryClient = useQueryClient();

  const emailchange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const passwordchange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const validation = () => {
    const valid = { isEmailValid: false, ispasswordvalid: false };
    if (email != "") {
      valid.isEmailValid = true;
    } else {
      valid.isEmailValid = false;
    }

    if (password != "") {
      valid.ispasswordvalid = true;
    } else {
      valid.ispasswordvalid = false;
    }
    setValidate(valid);

    if (valid.isEmailValid == true && valid.ispasswordvalid == true) {
      return true;
    } else {
      return false;
    }
  };
  const handleClick = async () => {
    const isValidation = validation();
    if (isValidation == false) return;

    try {
      const user = await queryClient.fetchQuery({
        queryKey: ["login"],
        queryFn: () => login(email, password),
      });

      if (user && !user.error) {
        localStorage.setItem("id", user?.user?._id);
        localStorage.setItem("accessToken", user?.accessToken);
        dispatch(userReducer.actions.setActiveUser(user?.user));
        nevigate("/");
      } else alert("No user found");
    } catch (err: Error) {
      alert(err.message);
    }
  };

  return (
    <div className="login-div">
      <Space direction="vertical" size="middle">
        <Input
          onChange={emailchange}
          placeholder="Enter Your Email"
          value={email}
        />
        {validate.isEmailValid == false && (
          <p style={{ color: "#f00" }}>valid email required</p>
        )}
        <Input.Password
          onChange={passwordchange}
          placeholder="input password"
          value={password}
        />
        {validate.ispasswordvalid === false && (
          <p style={{ color: "#f00" }}>Password required</p>
        )}
        <Button type="primary" onClick={handleClick}>
          Login
        </Button>
      </Space>
      {/* {user && <Alert message="wrong email password" type="error" closable />} */}
    </div>
  );
}

export default Loginform;
