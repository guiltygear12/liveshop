import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
            },
        ],
        errorElement: <NotFound />,
    },
]);
export default router;
