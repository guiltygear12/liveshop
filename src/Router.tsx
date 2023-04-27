import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home/Home";
import NotFound from "./components/NotFound";
import Products from "./Products/Products";
import Login from "./Form/Login";
import Register from "./Form/Register";
import MyPage from "./MyPage/MyPage";
import Detail from "./Products/Detail";
import UserInfo from "./MyPage/components/UserInfo";
import LikeList from "./MyPage/components/LikeList";
import Cart from "./MyPage/components/Cart";

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
                path: "Detail/:itemId",
                element: <Detail />,
            },
            {
                path: "MyPage/",
                element: <MyPage />,
                children: [
                    {
                        path: "UserInfo",
                        element: <UserInfo />,
                    },
                    {
                        path: "LikeList",
                        element: <LikeList />,
                    },
                    {
                        path: "Cart",
                        element: <Cart />,
                    },
                ],
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
