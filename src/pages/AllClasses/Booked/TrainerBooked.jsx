import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/axiosSecure/useAxiosSecure";
import BookingCard from "./BookingCard";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useAuth from "../../../hook/useAuth";

const TrainerBooked = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const email = user?.email;

    const { data: slot = [], isLoading, error } = useQuery({
        queryKey: ['slot', email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/slot/${email}`);
            return data;
        },
        enabled: !!user?.email,
    })
    console.log(slot)

    if (isLoading) return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    if (error) {
        return error.message;
    }
    if (!slot || Object.keys(slot).length === 0) {
        return <div>No slots found.</div>;
    }
    return (
        <div>
            <Helmet>
                <title>IRON | Booking Page</title>
            </Helmet>
            <SectionTitle
                heading={'Booking Page'}>
            </SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                <BookingCard key={slot._id} slot={slot} />
            </div>
        </div>
    );
};

export default TrainerBooked;