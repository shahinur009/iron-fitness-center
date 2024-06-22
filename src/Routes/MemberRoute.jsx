import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";
import useMember from "../hook/useMember";

const MemberRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const [isMember, isMemberLoading] = useMember();

    if (loading || isMemberLoading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user && isMember) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default MemberRoute;