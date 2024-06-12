import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/axiosSecure/useAxiosSecure";
import ManageSlotCard from "./ManageSlotCard";
import useAuth from "../../../hook/useAuth";

const ManageSlots = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data, index } = useQuery({
        queryKey: ['slot', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/slot/${user?.email}`)
            console.log(data)
            return (data, index);
        }
    })
    if (loading) return <span className="loading loading-spinner loading-lg"></span>

    return (
        <div>
            <h1>Manage Slots</h1>

            <ManageSlotCard data={data} index={index} />
        </div>
    );
};

export default ManageSlots;