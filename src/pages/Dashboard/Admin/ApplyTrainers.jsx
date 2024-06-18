





import { useEffect, useState } from "react";
import useAuth from "../../../hook/useAuth";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useAxiosSecure from "../../../hook/axiosSecure/useAxiosSecure";
import toast from "react-hot-toast";


const ApplyTrainers = () => {
    const { loading } = useAuth();
    const [trainers, setTrainers] = useState([]);
    const axios = useAxiosSecure();
    let fetchTrainer = () => {
        fetch('http://localhost:5000/slots')
            .then(res => res.json())
            .then(data => setTrainers(data))
            .catch(error => console.error('Error fetching trainers:', error));
    }
    let confirmTrainer = (email, make_trainer = false) => {
        axios.post('http://localhost:5000/slot/make-trainer/' + email, {
            make_trainer
        }).then((res) => {
            if (res.status) {
                toast.success("Trainer Status Change Successfully")

            }
        }).finally(() => {

            fetchTrainer()
        })
    }
    useEffect(() => {
        fetchTrainer()
    }, []);
    if (loading) {
        return <div className="flex justify-center my-40 text-purple-700 mt-44 items-center"><span className="loading loading-spinner loading-lg "></span></div>
    }
    return (
        <div className="mb-20">
            <SectionTitle heading="ApplyTrainers" />
            <div className="overflow-x-auto rounded-xl">
                <table className="min-w-full bg-white dark:bg-gray-800">
                    <thead className="bg-black text-lg font-bold text-white">
                        <tr className="text-left">
                            <th className="px-4 py-4">Sl</th>
                            <th className="px-4 py-4">Email</th>
                            <th className="px-4 py-4">Status</th>
                            <th className="px-4 py-4">Name</th>
                            <th className="px-4 py-4">Age</th>
                            <th className="px-4 py-4">Photo</th>
                            <th className="px-4 py-4">Skill</th>
                            <th className="px-4 py-4">Day</th>
                            <th className="px-4 py-4">Time</th>
                            <th className="px-4 py-4">Experience</th>
                            <th className="px-4 py-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trainers.map((subscriber, index) => (
                            <tr key={subscriber._id} className="font-bold text-black dark:text-white">
                                <td className="border px-4 py-4">{index + 1}</td>
                                <td className="border px-4 py-4">{subscriber?.email}</td>
                                <td className="border px-4 py-4">{subscriber?.status}</td>
                                <td className="border px-4 py-4">{subscriber?.info?.name}</td>
                                <td className="border px-4 py-4">{subscriber?.info?.age}</td>
                                <td className="border px-4 py-4">
                                    <img src={subscriber?.info?.photo} alt="Photo" className="w-10 h-10 object-cover" />
                                </td>
                                <td className="border px-4 py-4">{subscriber?.info?.skill}</td>
                                <td className="border px-4 py-4">{subscriber?.info?.day}</td>
                                <td className="border px-4 py-4">{subscriber?.info?.time}</td>
                                <td className="border px-4 py-4">{subscriber?.info?.experience}</td>
                                <td className="border px-4 py-4">
                                    <button onClick={() => confirmTrainer(subscriber?.email, true)} className="btn btn-sm btn-success">Accept</button>
                                    <button onClick={() => confirmTrainer(subscriber?.email, false)} className="btn btn-sm btn-error">Reject</button>

                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ApplyTrainers;