import { Flex, Input, Button, Space } from "antd";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [validate, setValid] = useState({ email: true, password: true });
  const [user, setUser] = useState({});

  const validation = () => {
    if (email) {
      setValid({ email: false, password: true });
      return false;
    }
    if (password) {
      setValid({ email: false, password: true });
      return false;
    }
    return true;
  };

  const handleClick = async () => {
    //if (!validation()) return;
    const response = await fetch(
      "http://localhost:8081/api/user/getUserByEmail",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email }),
      }
    );
    const result = await response.json();
    setUser(result);

    // .then((result) => {
    //     return result.json();
    //   })
    //   .then((response) => {
    //     setUser(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
            status={validate ? "error" : ""}
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
        {user && Object.keys(user).length > 0 && (
          <Space direction="vertical">
            <div>
              <span>name {user.name}</span>
              <br></br>
              <span>Dob: {new Date(user.dob).toLocaleDateString()}</span>
            </div>
          </Space>
        )}
      </div>
    </Flex>
  );
};

export default Login;
