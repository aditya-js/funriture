import { useSelector, useDispatch } from "react-redux";
import { Layout, Input, Avatar, Flex, Badge } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../../queries/users";
import { UseDispatch } from "react-redux";
import { userReducer } from "../../store";
import Logout from "../auth/logout";

const { Header } = Layout;

function userOptions(isLoggedIn: boolean) {
  return isLoggedIn
    ? [
        {
          key: "1",
          label: <Link to="/profile">My Profile</Link>,
        },
        {
          key: "2",
          label: <Logout />,
        },
      ]
    : [
        {
          key: "1",
          label: <Link to="/login">Sign In</Link>,
        },
      ];
}

export default function AppHeader() {
  //const dispatch = useDispatch();
  const user = useSelector((state) => state.activeUser.user);
  const [show, setShow] = useState();
  const isLoggedIn = Boolean(localStorage.getItem("id"));
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const user = await getUser(localStorage.getItem("id") || "");
      console.log("Hiii", user);
      dispatch(userReducer.actions.setActiveUser(user));
    }
    getData();
  }, []);

  const styles = isLoggedIn && {backgroundColor:'#000'}

  return (
    <Header
      style={{
        position: "inherit",
        top: 0,
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #00000029",
        boxShadow: "0 3px 2px -2px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Flex justify="space-between">
        <Flex align="center" gap="15px">
          <a
            href="http://localhost:5173"
            target="_self"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img src="/logo.png" alt="logo" height="50px" />
            <span style={{ fontSize: "26px", fontWeight: 700 }}>Funriture</span>
          </a>
          <Input.Search
            size="large"
            placeholder="What are you looking for?"
            style={{ width: 400 }}
          />
        </Flex>
        <Flex align="center" gap="30px">
          <Dropdown
            menu={{ items: userOptions(isLoggedIn) }}
            placement="bottom"
          >
            <Avatar style={styles}>
              {isLoggedIn ? user?.name?.substring(0, 1) : <UserOutlined />}
            </Avatar>
          </Dropdown>
          <Badge count={1}>
            <ShoppingCartOutlined style={{ fontSize: "26px" }} />
          </Badge>
        </Flex>
      </Flex>
    </Header>
  );
}
