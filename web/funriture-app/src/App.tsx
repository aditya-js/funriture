import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import AppHeader from "./components/header";
import { ConfigProvider, Layout, Space } from "antd";
import Login from "./pages/login";

function App() {
  const theme = useSelector((state) => state.theme);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <ConfigProvider
        theme={{
          //algorithm: theme.darkAlgorithm,
          components: {
            Layout: {
              colorBgLayout: "white",
            },
          },
          token: {
            colorPrimary: "black",
            colorInfo: "black",
          },
        }}
      >
        {/* <Space direction="vertical" size="middle"> */}
        <Layout>
          <AppHeader />
          <Layout.Content>
            <RouterProvider router={router} />
          </Layout.Content>
          <Layout.Footer>Footer</Layout.Footer>
        </Layout>
        {/* </Space> */}
      </ConfigProvider>
    </>
  );
}

export default App;
