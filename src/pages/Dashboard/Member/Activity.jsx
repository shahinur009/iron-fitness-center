import { useState } from "react";
import useAxiosSecure from "../../../hook/axiosSecure/useAxiosSecure";
import useAuth from "../../../hook/useAuth";
import { useQuery } from "@tanstack/react-query";
import { FaEye } from "react-icons/fa";


const Activity = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [showModal, setShowModal] = useState(false);
    const [selectedFeedback, setSelectedFeedback] = useState(null);

    const { data: slots = [], isLoading, error } = useQuery({
        queryKey: ["slots", user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/slots/${user?.email}`);
            return [data];
        }
    });

    const { data: feedbacks = [] } = useQuery({
        queryKey: ["feedbacks", user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/feedback/${user?.email}`);
            return [data];
        }
    });

    const openModal = (user) => {
        // Ensure feedbacks is an array before attempting to find feedback
        if (Array.isArray(feedbacks)) {
            const slotFeedback = feedbacks.find((fb) => fb?.email === user?.email);
            setSelectedFeedback(slotFeedback);
            setShowModal(true);
        } else {
            console.error("Feedbacks data is not an array:", feedbacks);
            // Handle the case where feedbacks data is not an array (e.g., show error message)
        }
    };

    const closeModal = () => {
        setSelectedFeedback(null);
        setShowModal(false);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Trainer Application Status</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(slots) && slots.length > 0 ? (
                            slots.map((slot, index) => (
                                <tr key={slot._id}>
                                    <td>{index + 1}</td>
                                    <td>{slot?.info?.email}</td>
                                    <td>{slot?.info?.status}</td>
                                    <td>
                                        <button className="btn" onClick={() => openModal(user)}>
                                            <FaEye /> {/* Eye icon */}
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No applications found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {showModal && selectedFeedback && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="modal-box bg-white p-6 rounded shadow-lg">
                        <h3 className="font-bold text-lg">Feedback</h3>
                        <p className="py-2">
                            <strong>Message:</strong> {selectedFeedback?.message || "No feedback available"}
                        </p>
                        <div className="modal-action">
                            <button className="btn" onClick={closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Activity;
