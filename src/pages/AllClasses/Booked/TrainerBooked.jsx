import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/axiosSecure/useAxiosSecure";
import BookingCard from "./BookingCard";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useAuth from "../../../hook/useAuth";
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
            <div className="">
                <BookingCard key={trainer._id} trainer={trainer} slot={selectedSlot} />
            </div>
        </div>
    );
};

export default TrainerBooked;