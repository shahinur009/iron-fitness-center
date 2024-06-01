import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) return <p className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></p>

    if (user) return children;

    return <Navigate to='/login' state={location.pathname} replace='true'></Navigate>
};

export default PrivateRoute;