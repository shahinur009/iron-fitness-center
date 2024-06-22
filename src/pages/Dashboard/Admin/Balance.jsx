import { useEffect, useState } from "react";
import useAuth from "../../../hook/useAuth";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
// import useAxiosSecure from "../../../hook/axiosSecure/useAxiosSecure";
import PieChart from "./PieChart";


const Balance = () => {
    const [subscribers, setSubscribers] = useState([]);

    useEffect(() => {
        fetch('https://iron-fitness-server.vercel.app/subscribers')
            .then(res => res.json())
            .then(data => setSubscribers(data))
            .catch(error => console.error('Error fetching subscribers:', error));
    }, []);
    const { loading } = useAuth();
    const [trainers, setTrainers] = useState([]);
    // const axios = useAxiosSecure();
    let fetchTrainer = () => {
        fetch('https://iron-fitness-server.vercel.app/payment-list')
            .then(res => res.json())
            .then(data => setTrainers(data?.data))
            .catch(error => console.error('Error fetching trainers:', error));
    }
    useEffect(() => {
        fetchTrainer()
    }, []);
    let total = 0;
    if (loading) {
        return <div className="flex justify-center my-40 text-purple-700 mt-44 items-center"><span className="loading loading-spinner loading-lg "></span></div>
    }
    let calculateTotal = () => {
        trainers?.forEach((trainer) => {
            total += trainer?.price
        })
        return total
    }
    return (
        <div className="mb-20">
            <SectionTitle heading="Balance" />
            <div className="overflow-x-auto rounded-xl">
                <table className="min-w-full bg-white dark:bg-gray-800">
                    <thead className="bg-black text-lg font-bold text-white">
                        <tr className="text-left">
                            <th className="px-4 py-4">Sl</th>
                            <th className="w-1/3 px-4 py-4">email</th>
                            <th className="w-1/3 px-4 py-4">package name</th>
                            <th className="w-1/3 px-4 py-4">trainer name</th>
                            <th className="w-1/3 px-4 py-4">price</th>
                            {/* <th className="w-1/3 px-4 py-2">Subscription Date</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {trainers?.slice(-6).reverse().map((subscriber, index) => {
                            return <tr key={subscriber._id} className="font-bold text-black" >
                                <td className="border px-4 py-4">{index + 1}</td>
                                <td className="border px-4 py-4">{subscriber?.email}</td>
                                <td className="border px-4 py-4">{subscriber?.package_name}</td>
                                <td className="border px-4 py-4">{subscriber?.trainer_info?.name}</td>
                                <td className="border px-4 py-4">{subscriber?.price}</td>


                            </tr>
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th className="border px-4 py-4">Total: {calculateTotal()}</th>
                        </tr>
                    </tfoot>
                </table>

                <div className="w-full md:w-1/2 mx-auto ">
                    <PieChart paiData={{
                        total_subscriber: subscribers.length,
                        paid_members: trainers.length
                    }
                    } />
                </div>
            </div>
        </div>
    );
};

export default Balance;