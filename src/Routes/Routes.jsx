import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../Shared/login/Login";
import Registration from "../Shared/Registration/Registration";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllTrainers from "../pages/AllTrainerPage/AllTrainers";
import AllClasses from "../pages/AllClasses/AllClasses";
import TrainerDetails from "../pages/AllTrainerPage/TrainerDetails";
import DashboardLayout from "../layout/DashboardLayout";
import Statistics from "../pages/Dashboard/Common/Statistics";
import AddNewSlot from "../pages/Dashboard/Trainer/AddNewSlot";
import AddNewForum from "../pages/Dashboard/Trainer/AddNewForum";
import ManageSlots from "../pages/Dashboard/Trainer/ManageSlots";

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
                path: '/all-trainer',
                element: <AllTrainers />
            },
            {
                path: '/all-classes',
                element: <AllClasses />
            },
            {
                path: '/trainer/:id',
                element: <TrainerDetails />

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
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Statistics />
            },
            {
                path: 'manageSlots',
                element: <ManageSlots />
            },
            {
                path: 'addNewSlot',
                element: <AddNewSlot />
            },
            {
                path: 'addNewForum',
                element: <AddNewForum />
            }
        ],
    }
]);

