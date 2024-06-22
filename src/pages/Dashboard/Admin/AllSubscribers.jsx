import { useEffect, useState } from "react";
import useAuth from "../../../hook/useAuth";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";


const AllSubscribers = () => {
    const { loading } = useAuth();
    const [subscribers, setSubscribers] = useState([]);

    useEffect(() => {
        fetch('https://iron-fitness-server.vercel.app/subscribers')
            .then(res => res.json())
            .then(data => setSubscribers(data))
            .catch(error => console.error('Error fetching subscribers:', error));
    }, []);

    if (loading) {
        return <div className="flex justify-center my-40 text-purple-700 mt-44 items-center"><span className="loading loading-spinner loading-lg "></span></div>
    }
    return (
        <div className="mb-20">
            <SectionTitle heading="Subscribers" />
            <div className="overflow-x-auto rounded-xl">
                <table className="min-w-full bg-white dark:bg-gray-800">
                    <thead className="bg-black text-lg font-bold text-white">
                        <tr className="text-left">
                            <th className="w-1/3 px-4 py-4">Sl</th>
                            <th className="w-1/3 px-4 py-4">Name</th>
                            <th className="w-1/3 px-4 py-4">Email</th>
                            {/* <th className="w-1/3 px-4 py-2">Subscription Date</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {subscribers.map((subscriber, index) => (
                            <tr key={subscriber._id} className="font-bold text-black">
                                <td className="border px-4 py-4">{index + 1}</td>
                                <td className="border px-4 py-4">{subscriber?.name}</td>
                                <td className="border px-4 py-4">{subscriber?.email}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSubscribers;