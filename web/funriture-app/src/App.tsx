import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import Header from "./components/header";
import { ConfigProvider, Layout, Space } from "antd";

function App() {
  const theme = useSelector((state) => state.theme);
  console.log("theme", theme);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
          <Header />
          <Layout.Content style={{ padding: "20px 48px", minHeight: "500px" }}>
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
