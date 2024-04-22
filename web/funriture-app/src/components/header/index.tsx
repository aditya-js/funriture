import { useSelector, useDispatch } from "react-redux";
import { Layout, Input, Avatar, Flex, Badge } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import { Link, Navigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { getUser } from "../../queries/users";
import { UseDispatch } from "react-redux";
import { userReducer } from "../../store";
import Logout from "../auth/logout";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";
import { getCategories } from "../../queries/products";

const { Header } = Layout;
// const items: MenuProps["items"] = [
//   {
//     label: "Categories",
//     key: "Categories",
//     children: [],
//   },
// ];

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
  //const user = useSelector((state) => state.activeUser.user);
  const [items, setItems] = useState();
  const isLoggedIn = Boolean(localStorage.getItem("id"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: user } = useQuery({
    queryKey: ["getUser"],
    queryFn: () => getUser(localStorage.getItem("id") || ""),
    refetchOnMount: false,
  });

  // const { data: cates } = useQuery({
  //   queryKey: ["getCategories"],
  //   queryFn: () => getCategories(),
  //   refetchOnMount: false,
  // });

  // const items = useMemo(() => {
  //   const item = [
  //     {
  //       label: "Categories",
  //       key: "Categories",
  //       children: (cates || []).map((item) => {
  //         return {
  //           label: item.name,
  //           key: item._id,
  //         };
  //       }),
  //     },
  //   ];
  //   return item;
  // }, [cates]);

  useEffect(() => {
    async function getCat() {
      const cates = await getCategories();
      const item = [
        {
          label: "Categories",
          key: "Categories",
          children: cates.map((item) => {
            return {
              label: (
                <Link to={`/product?categoryId=${item._id}`}>{item.name}</Link>
              ),
              key: item._id,
            };
          }),
        },
      ];
      setItems(item);
    }
    getCat();
    dispatch(userReducer.actions.setActiveUser(user));
  }, [user?._id]);

  const styles = isLoggedIn && { backgroundColor: "#000" };
  const onSearch = (text) => {
    if (!text) {
      // console.log("input is empty")
      alert("input is empty");
      return;
    }

    navigate(`/product?searchString=${text}`);
  };
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
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/logo.png"
              alt="logo"
              style={{ backgroundColor: "#f00", height: "50px" }}
            />
            <span style={{ fontSize: "26px", fontWeight: 700 }}>Funriture</span>
          </Link>
          <Input.Search
            onSearch={onSearch}
            size="large"
            placeholder="What are you looking for?"
            style={{ width: 400 }}
          />
        </Flex>
        <Flex style={{ width: "30%" }}>
          <Menu
            mode="horizontal"
            items={items}
            style={{ width: "30%" }}
            // onClick={productClick}
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
