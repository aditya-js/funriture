import { Button, Menu } from "antd";
import { theme } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { Breadcrumb, Layout, Input, Space, Avatar, Flex, Badge } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const { Header } = Layout;

const { changeTheme } = theme.actions;

export default function AppHeader() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  return (
    <Header
      style={{
        position: "sticky",
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
          <Avatar icon={<UserOutlined />} />
          <Badge count={1}>
            <ShoppingCartOutlined style={{ fontSize: "26px" }} />
          </Badge>
        </Flex>
      </Flex>
    </Header>
  );
}
