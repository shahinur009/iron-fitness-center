import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../Shared/login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllTrainers from "../pages/AllTrainerPage/AllTrainers";
import AllClasses from "../pages/AllClasses/AllClasses";
import TrainerDetails from "../pages/AllTrainerPage/TrainerDetails";
import DashboardLayout from "../layout/DashboardLayout";
import Statistics from "../pages/Dashboard/Common/Statistics";
import AddNewSlot from "../pages/Dashboard/Trainer/AddNewSlot";
import AddNewForum from "../pages/Dashboard/Trainer/AddNewForum";
import ManageSlots from "../pages/Dashboard/Trainer/ManageSlots";
import BecomeATrainer from "../pages/BecomeATrainer/BecomeATrainer";
import Registration from "../Shared/Registration/Registration";
import Profile from "../pages/Dashboard/Common/Profile";
import AllSubscribers from "../pages/Dashboard/Admin/AllSubscribers";
import ApplyTrainers from "../pages/Dashboard/Admin/ApplyTrainers";
import Balance from "../pages/Dashboard/Admin/Balance";
import AddNewClass from "../pages/Dashboard/Admin/AddNewClass";
import AllTrainersInfo from "../pages/Dashboard/Admin/AllTrainersInfo";
import Activity from "../pages/Dashboard/Member/Activity";
import BookedTrainer from "../pages/Dashboard/Member/BookedTrainer";
import TrainerBooked from "../pages/AllClasses/Booked/TrainerBooked";
<<<<<<< HEAD
import PayNow from "../pages/Payment/PayNow";
=======
>>>>>>> c607acb47c137e098a759815acb07dcbf82a9c4d

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
                path: '/pay-now',
                element: <PayNow />
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
                path: '/becomeATrainer',
                element: <BecomeATrainer />
            },
            {
                path: 'bookingPage',
                element: <TrainerBooked />
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
            // common Route
            {
                index: true,
                element: <Statistics />
            },
            {
                path: 'profile',
                element: <Profile />
            },
            // admin Route
            {
                path: 'all-subscribers',
                element: <AllSubscribers />
            },
            {
                path: 'all-trainers-info',
                element: <AllTrainersInfo />
            },
            {
                path: 'apply-trainers',
                element: <ApplyTrainers />
            },
            {
                path: 'balance',
                element: <Balance />
            },
            {
                path: 'add-new-class',
                element: <AddNewClass />
            },
            {
                path: 'addNewForum',
                element: <AddNewForum />
            },
            // Trainer Route
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
            },
            // Member Route
            {
                path: 'activity',
                element: <Activity />
            },
            {
                path: 'bookedTrainer',
                element: <BookedTrainer />
            }
        ],
    }
]);

