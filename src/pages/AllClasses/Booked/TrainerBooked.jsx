import useAxiosSecure from "../../../hook/axiosSecure/useAxiosSecure";
import BookingCard from "./BookingCard";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useAuth from "../../../hook/useAuth";
import { useLocation } from "react-router-dom";

const TrainerBooked = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const email = user?.email;
    const location = useLocation()
    const { trainer, selectedSlot } = location.state || {};


    return (
        <div>
            <Helmet>
                <title>IRON | Booking Page</title>
            </Helmet>
            <SectionTitle
                heading={'Booking Page'}>
            </SectionTitle>
            <div className="">
                <BookingCard key={trainer._id} slot={{...trainer, selectedSlot}} trainer={trainer} />
            </div>
        </div>
    );
};

export default TrainerBooked;