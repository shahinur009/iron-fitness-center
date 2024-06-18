import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/axiosSecure/useAxiosSecure";
import BookingCard from "./BookingCard";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useAuth from "../../../hook/useAuth";
<<<<<<< HEAD
import { useLocation, useNavigate } from "react-router-dom";

const TrainerBooked = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedSlot, trainer } = location.state || {};
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    if (!selectedSlot && !trainer) {
        navigate(-1)
        return false
    }
console.log(trainer.slots)
    if (!trainer || trainer?.slots?.length === 0) {
=======

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
>>>>>>> c607acb47c137e098a759815acb07dcbf82a9c4d
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
<<<<<<< HEAD
            <div className="">
                <BookingCard key={trainer._id} trainer={trainer} slot={selectedSlot} />
=======
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                <BookingCard key={slot._id} slot={slot} />
>>>>>>> c607acb47c137e098a759815acb07dcbf82a9c4d
            </div>
        </div>
    );
};

export default TrainerBooked;