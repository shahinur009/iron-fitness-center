import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./axiosSecure/useAxiosSecure";
import useAuth from "./useAuth";


const useMember = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isMember, isPending: isMemberLoading } = useQuery({
        queryKey: [user?.email, 'member'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/member/${user.email}`)
            return res.data?.member;
        }
    })
    return [isMember, isMemberLoading]
};

export default useMember;