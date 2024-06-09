import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/axiosSecure/useAxiosSecure";
import useAuth from "../../../hook/useAuth";
import Select from 'react-select';
import { TbFidgetSpinner } from "react-icons/tb";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import toast from "react-hot-toast";

const AddNewSlot = () => {
    const { user, loading } = useAuth() || {};
    const axiosSecure = useAxiosSecure();
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [selectedDays, setSelectedDays] = useState([]);
    const [selectedTimes, setSelectedTimes] = useState([]);


    const { data } = useQuery({
        queryKey: ['slot', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/slot/${user?.email}`)
            console.log(data)
            return data;

        }

    })
    const { mutateAsync } = useMutation({
        mutationFn: async trainerSlotData => {
            const { data } = await axiosSecure.post(`/slots`, trainerSlotData)
            return data;
        },
        onSuccess: () => {
            console.log('Data saved successfully')
        }

    })
    const handleClassAdd = async (e) => {
        e.preventDefault();
        const form = e.target;
        const trainerName = form.trainerName.value;
        const email = form.email.value;
        const description = form.description.value;
        const day = selectedDays.map(day => day?.value);
        const time = selectedTimes.map(time => time?.value);
        const skill = selectedSkills.map(skill => skill?.value);

        

        const trainer = {
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
        }
        try {
            const trainerSlotData = { trainerName, email, description, trainer, day, time, skill }
            // console.table(trainerSlotData)
            await mutateAsync(trainerSlotData)
            toast.success('class add successfully')
        } catch (err) {
            console.log(err)
        }

    }
    const options = [
        { value: 'Saturday', label: 'Saturday' },
        { value: 'Sunday', label: 'Sunday' },
        { value: 'Monday', label: 'Monday' },
        { value: 'TuesDay', label: 'TuesDay' },
        { value: 'WednesDay', label: 'WednesDay' },
        { value: 'Thursday', label: 'Thursday' },
        { value: 'Friday', label: 'Friday' },
    ];
    const times = [
        { value: 'Morning- 06am to 08am', label: 'Morning- 06am to 08am' },
        { value: 'Evening- 16pm to 18pm', label: 'Evening- 16pm to 18pm' },
        { value: 'Night- 21pm to 23pm', label: 'Night- 21pm to 23pm' },
    ];
    const skills = [
        { value: 'Yoga', label: 'Yoga' },
        { value: 'Zumba Dance', label: 'Zumba Dance' },
        { value: 'Body Building', label: 'Body Building' },
        { value: 'Musculation', label: 'Musculation' },
        { value: 'Fitness Running', label: 'Fitness Running' },
        { value: 'Weight Lifting', label: 'Weight Lifting' },
        { value: 'Classic Yoga', label: 'Classic Yoga' },
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
                    {/* Class name and Image */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-lg font-bold">Trainer Name</span>
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
                                <span className="label-text text-white text-lg font-bold">Email</span>
                            </label>
                            <input
                                required
                                name="email"
                                defaultValue={user?.email}
                                className="input input-bordered input-double-line"
                            />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" >Days</label>
                            <Select className='px-4 py-2 mt-2'
                                name='day'
                                options={options}
                                labelField='label'
                                valueField='label'

                                defaultValue={data?.day?.map(d => { return { value: `${d}`, label: `${d}` } })}
                                isMulti
                                onChange={setSelectedDays}
                            />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" >Times</label>
                            <Select className='px-4 py-4'
                                name='time'
                                options={times}
                                labelField='label1'
                                valueField='label1'
                                defaultValue={data?.time?.map(t => { return { value: `${t}`, label: `${t}` } })}
                                isMulti
                                onChange={setSelectedTimes}
                            />
                        </div>

                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" >Skill</label>
                        <Select className='px-4 py-2 mt-2'
                            name='Skill'
                            options={skills}
                            labelField='label2'
                            valueField='label2'
                            defaultValue={data?.skill?.map(s => { return { value: `${s}`, label: `${s}` } })}
                            isMulti
                            onChange={setSelectedSkills}
                        />
                    </div>
                    {/* Class Details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white text-lg font-bold">Description</span>
                        </label>
                        <textarea
                            required
                            name="description"
                            // defaultValue={data.description}
                            placeholder="Class Description"
                            className="textarea textarea-warning"
                        />
                    </div>
                    {/* User Info */}
                    <button
                        disabled={loading}
                        type='submit'
                        className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-orange-400'
                    >
                        {loading ? (
                            <TbFidgetSpinner className='animate-spin m-auto' />
                        ) : (
                            ' Add Class & Continue'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNewSlot;