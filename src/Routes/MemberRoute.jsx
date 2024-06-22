import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";
import useTrainer from "../hook/UseTrainer";

const MemberRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const [isMember, isMemberLoading] = useTrainer();

    if (loading || isMemberLoading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user && isMember) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default MemberRoute;