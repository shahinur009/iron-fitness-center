import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./axiosSecure/useAxiosSecure";
import useAuth from "./useAuth";


const useMember = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isMember, isPending: isMemberLoading } = useQuery({
        queryKey: [user?.email, 'trainer'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            return res.data?.admin;
        }
    })
    return [isMember, isMemberLoading]
};

export default useMember;