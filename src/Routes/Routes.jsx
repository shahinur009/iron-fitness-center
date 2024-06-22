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
import PayNow from "../pages/Payment/PayNow";
import AddNewForumAdmin from "../pages/Dashboard/Admin/AddNewForumAdmin";
import AllForums from "../pages/AllForums/AllForums";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import TrainerRoute from "./TrainerRoute";


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
                path: '/all-forums',
                element: <AllForums />
            },
            {
                path: '/slot/:id',
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
        element: <PrivateRoute>
            <DashboardLayout />
        </PrivateRoute>,
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
                element: <AdminRoute>
                    <AllSubscribers />
                </AdminRoute>
            },
            {
                path: 'all-trainers-info',
                element: <AdminRoute>
                    <AllTrainersInfo />
                </AdminRoute>
            },
            {
                path: 'apply-trainers',
                element: <AdminRoute>
                    <ApplyTrainers />
                </AdminRoute>
            },
            {
                path: 'balance',
                element: <AdminRoute>
                    <Balance />
                </AdminRoute>
            },
            {
                path: 'add-new-class',
                element: <AdminRoute>
                    <AddNewClass />
                </AdminRoute>
            },
            {
                path: 'addNewForumAdmin',
                element: <AdminRoute>
                    <AddNewForumAdmin />
                </AdminRoute>
            },
            // Trainer Route
            {
                path: 'manageSlots',
                element: <TrainerRoute>
                    <ManageSlots />
                </TrainerRoute>
            },
            {
                path: 'addNewSlot',
                element: <TrainerRoute>
                    <AddNewSlot />
                </TrainerRoute>
            },
            {
                path: 'addNewForumTrainer',
                element: <TrainerRoute>
                    <AddNewForum />
                </TrainerRoute>
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

