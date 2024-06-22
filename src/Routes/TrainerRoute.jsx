import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";
import useTrainer from "../hook/UseTrainer";


const TrainerRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const [isTrainer, isTrainerLoading] = useTrainer();

    if (loading || isTrainerLoading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user && isTrainer) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default TrainerRoute;