import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./pages/counter";
import { useSelector } from "react-redux";
import Header from "./components/header";
import {ConfigProvider} from 'antd'

function App() {
  const theme = useSelector((state) => state.theme);
  console.log("theme", theme);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/counter",
      element: <Counter />,
    },
  ]);
  return (
    <>
      <ConfigProvider theme={{
      algorithm: theme.compactAlgorithm,
      
        "token": {
          "colorPrimary": "#000000",
          "colorInfo": "#000000"
        }
      
    }}>
        <Header />
        <RouterProvider router={router} />
      </ConfigProvider>
    </>
  );
}

export default App;
