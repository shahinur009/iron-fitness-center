import useAxiosSecure from "./axiosSecure/useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useTrainer = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isTrainer, isPending: isTrainerLoading } = useQuery({
        queryKey: [user?.email, 'trainer'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            return res.data?.admin;
        }
    })
    return [isTrainer, isTrainerLoading]
};

export default useTrainer;