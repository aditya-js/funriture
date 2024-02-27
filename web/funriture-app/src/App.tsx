import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./pages/counter";
import { useSelector } from "react-redux";
import { DarkTheme, LightTheme, BaseProvider } from "baseui";
import Header from "./components/header";

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
      <BaseProvider theme={theme === 0 ? DarkTheme : LightTheme}>
        <Header />
        <RouterProvider router={router} />
      </BaseProvider>
    </>
  );
}

export default App;
