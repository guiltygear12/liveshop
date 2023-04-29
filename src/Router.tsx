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
import Board from "./Board/Board";
import EventPage from "./Board/components/EventPage";
import Notice from "./Board/components/Notice";
import BoardItemBody from "./Board/components/BoardItemBody";

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
                path: "Products/:CategoryId",
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
            {
                path: "Board/",
                element: <Board />,
                children: [
                    {
                        path: "Notice/",
                        element: <Notice />,
                    },
                    {
                        path: "EventPage",
                        element: <EventPage />,
                    },
                    {
                        path: "BoardBody/:BoardId",
                        element: <BoardItemBody />,
                    },
                ],
            },
        ],
        errorElement: <NotFound />,
    },
]);
export default router;
