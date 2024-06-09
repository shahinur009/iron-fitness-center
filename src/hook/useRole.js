import useAuth from "./useAuth";
import useAxiosSecure from "./axiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    // fetch user info using logged in user email
    const { data: role, isLoading } = useQuery({
        queryKey: ['role', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/user/${user?.email}`)
            return data.role;
        }
    })


    return [role, isLoading]
};

export default useRole;