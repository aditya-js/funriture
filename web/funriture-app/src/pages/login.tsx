import { Flex, Input, Button, Space } from "antd";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [validate, setValid] = useState();

  const validation = () => {
    if (!email || !password) {
      setValid(true);
      return false;
    }
    return true;
  };

  const handleClick = () => {
    if (!validation()) return;
    alert(`email: ${email}, password: ${password}`);
  };

  return (
    <Flex
      justify="center"
      align="center"
      style={{ backgroundColor: "#f4f4f4", padding: "50px 0px" }}
    >
      <div className="login-div">
        <Space direction="vertical" size="middle">
          <Input
            status={validate ? "error" : ""}
            onChange={(e) => {
              console.log(e.target.value);
              setEmail(e.target.value);
            }}
            placeholder="Enter Your Email"
            value={email}
          />
          <Input.Password
            placeholder="input password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button type="primary" onClick={handleClick}>
            Login
          </Button>
        </Space>
      </div>
    </Flex>
  );
};

export default Login;
