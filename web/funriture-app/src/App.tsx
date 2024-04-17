import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import AppHeader from "./components/header";
import { ConfigProvider, Layout, Space } from "antd";
import Login from "./pages/login";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Product from "./pages/product";

const queryClient = new QueryClient();

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
    {
      path: "/product",
      element: <Product />,
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
        <QueryClientProvider client={queryClient}>
          {/* <Space direction="vertical" size="middle"> */}
          <Layout>
            <RouterProvider router={router} />
            {/* <AppHeader />
          <Layout.Content>
            
          </Layout.Content>
           <Layout.Footer>Footer</Layout.Footer>
         
         </Space> */}
          </Layout>
        </QueryClientProvider>
      </ConfigProvider>
    </>
  );
}

export default App;
