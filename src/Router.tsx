import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home/Home";
import NotFound from "./components/NotFound";
import Products from "./Products/Products";
import Login from "./Form/Login";
import Register from "./Form/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "Products",
                element: <Products />,
            },
            {
                path: "MyPage",
                element: <Home />,
            },
            {
                path: "Login",
                element: <Login />,
            },
            {
                path: "Register",
                element: <Register />,
            },
        ],
        errorElement: <NotFound />,
    },
]);
export default router;
