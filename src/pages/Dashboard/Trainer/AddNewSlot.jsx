import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hook/axiosSecure/useAxiosSecure";
import useAuth from "../../../hook/useAuth";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import Select from "react-select";
import { TbFidgetSpinner } from "react-icons/tb";


const AddNewSlot = () => {
    const { user, loading } = useAuth() || {};
    const axiosSecure = useAxiosSecure();
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [selectedDays, setSelectedDays] = useState([]);
    const [inputTimes, setInputTimes] = useState("");

    // Fetch slot data for the logged-in user
    const { data: slotData } = useQuery({
        queryKey: ["slot", user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/slot-email/${user?.email}`);
            return data;
        },
        enabled: !!user?.email, // only run the query if user.email is available
    });

    // Fetch class data from the server
    const { data: classes, isLoading: isLoadingClasses } = useQuery({
        queryKey: ["class"],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/class`);
            return data;
        },
    });

    const { mutateAsync } = useMutation({
        mutationFn: async (trainerSlotData) => {
            const { data } = await axiosSecure.post(`/slot`, trainerSlotData);
            return data;
        },
        onSuccess: () => {
            toast.success("Slot added successfully");
        },
        onError: (error) => {
            toast.error(`Error: ${error.message}`);
        },
    });

    useEffect(() => {
        if (slotData) {
            setSelectedDays(slotData.day.map(day => ({ value: day, label: day })));
        }
    }, [slotData]);

    const handleClassAdd = async (e) => {
        e.preventDefault();
        const form = e.target;
        const trainerName = form.trainerName.value;
        const email = form.email.value;
        const day = selectedDays.map((day) => day?.value);
        const time = inputTimes.split(",").map((time) => time.trim());
        const skill = selectedSkills.map((skill) => skill?.value);

        const trainer = {
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
        };

        const trainerSlotData = { trainerName, email, trainer, day, time, skill };
        await mutateAsync(trainerSlotData);
    };

    const dayOptions = [
        { value: "Saturday", label: "Saturday" },
        { value: "Sunday", label: "Sunday" },
        { value: "Monday", label: "Monday" },
        { value: "Tuesday", label: "Tuesday" },
        { value: "Wednesday", label: "Wednesday" },
        { value: "Thursday", label: "Thursday" },
        { value: "Friday", label: "Friday" },
    ];


    return (
        <div>
            <Helmet>
                <title>Trainer | Add Slot</title>
            </Helmet>
            <div className="text-lg bg-black font-bold p-16 my-16 mx-2 rounded-md">
                <h2 className="text-4xl text-white font-lato text-center font-extrabold mb-6">
                    Add New Slot
                </h2>

                <form onSubmit={handleClassAdd} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-lg font-bold">
                                    Trainer Name
                                </span>
                            </label>
                            <input
                                required
                                name="trainerName"
                                defaultValue={user?.displayName}
                                placeholder="Trainer Name"
                                className="input input-bordered input-double-line"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-lg font-bold">
                                    Email
                                </span>
                            </label>
                            <input
                                required
                                name="email"
                                defaultValue={user?.email}
                                className="input input-bordered input-double-line"
                            />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200">Days</label>
                            <Select
                                className="px-4 py-2 mt-2"
                                name="day"
                                options={dayOptions}
                                labelField="label"
                                valueField="label"
                                value={selectedDays}
                                isMulti
                                onChange={setSelectedDays}
                            />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200">Times</label>
                            <input
                                type="number"
                                className="px-4 py-2 mt-2 w-full text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                placeholder="Enter times"
                                value={inputTimes}
                                onChange={(e) => setInputTimes(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="text-white">Class Name</label>
                        <Select
                            className="px-4 py-2 mt-2 text-red-500"
                            name="Skill"
                            options={classes?.map(c => ({
                                value: c.class_title, label: c.class_title
                            }))}
                            labelField="label"
                            valueField="label"
                            isLoading={isLoadingClasses}
                            isMulti
                            onChange={setSelectedSkills}
                        />
                    </div>
                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-orange-400"
                    >
                        {loading ? (
                            <TbFidgetSpinner className="m-auto animate-spin" size={24} />
                        ) : (
                            "Add New Slot"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNewSlot;