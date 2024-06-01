import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../Shared/login/Login";
import Registration from "../Shared/Registration/Registration";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registration',
                element: <Registration />
            }
        ]
    },
]);

