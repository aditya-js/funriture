import React, { useState } from "react";
import { Button, Space, Input, Alert } from "antd";
import { useNavigate } from "react-router-dom";
import { activeUser } from "../../store";
import { useDispatch } from "react-redux";

function Loginform() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [validate, setValidate] = useState({isEmailValid: true, ispasswordvalid: true});

const emailchange = (e) =>{
  console.log(e.target.value)
  setEmail(e.target.value)
}

const passwordchange = (e) =>{
  console.log(e.target.value)
  setPassword(e.target.value)
}

const validation = () =>{
  const valid = {isEmailValid: false, ispasswordvalid: false};
  if(email!=''){
    valid.isEmailValid = true
  }
  else{
    valid.isEmailValid = false
  }

  if(password!=''){
    valid.ispasswordvalid = true
  }
  else{
    valid.ispasswordvalid = false
  }
  setValidate(valid);
  
  if(valid.isEmailValid==true && valid.ispasswordvalid ==true){
    return true
  } else{
    return false
  };
}
const handleClick = () => {
    const isValidation = validation();
    if(isValidation==false)
      return;

    console.log("login success")

}

  
  return (
    <div className="login-div">
      <Space direction="vertical" size="middle">
        <Input
        onChange={emailchange}
          placeholder="Enter Your Email"
          value={email}
        />
        {validate.isEmailValid == false && <p style={{color:'#f00'}}>valid email required</p>}
        <Input.Password
        onChange={passwordchange}
          placeholder="input password"
          value={password}
        />
        {validate.ispasswordvalid === false && <p style={{color:'#f00'}}>Password required</p> }
        <Button type="primary" onClick={handleClick}>
          Login
        </Button>
      </Space>
      {/* {user && <Alert message="wrong email password" type="error" closable />} */}
    </div>
  );
}

export default Loginform;
