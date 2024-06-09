import Swal from "sweetalert2";
import Select from 'react-select';
import useAuth from "../../../hook/useAuth";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import useAxiosSecure from "../../../hook/axiosSecure/useAxiosSecure";
import { imageUpload } from "../../../Api/Utilities/Utilities";
import { TbFidgetSpinner } from "react-icons/tb";


const AddNewClass = () => {
    const { user, setLoading, loading } = useAuth() || {};
    const axiosSecure = useAxiosSecure();
    const [imagePreview, setImagePreview] = useState();
    const [imageText, setImageText] = useState('Upload Image');
    const [trainerName, setTrainerName] = useState([]);
    const [selectedTimes, setSelectedTimes] = useState([]);

    const handleClassAdd = async (e) => {
        e.preventDefault();
        const form = e.target;
        const className = form.className.value;
        const description = form.description.value;
        const numberOfBooked = form.booked.value;
        const duration = form.duration.value;
        const category = form.category.value;
        const trainer = trainerName.map(trainer => trainer.value);
        const time = selectedTimes.map(time => time.value);
        const image = form.image.files[0];
        const admin = {
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
        }
        try {
            const image_url = await imageUpload(image)
            const classData = { className, description, numberOfBooked, duration, category, trainer, time, image: image_url, admin }
            console.table(classData)
        } catch (err) {
            console.log(err)
        }

    }
    const trainer = [
        { value: 'Emily Clark', label: 'Emily Clark' },
        { value: 'John Doe', label: 'John Doe' },
        { value: 'Sarah Lee', label: 'Sarah Lee' },
        { value: 'David Brown', label: 'David Brown' },
        { value: 'Jessica Williams', label: 'Jessica Williams' },
        { value: 'Anna Smith', label: 'Anna Smith' },
        { value: 'Mike Johnson', label: 'Mike Johnson' },
        { value: 'Laura Martinez', label: 'Laura Martinez' },
        { value: 'Chris Evans', label: 'Chris Evans' },
        { value: 'Samantha Green', label: 'Samantha Green' },

    ];
    const times = [
        { value: 'Morning- 06am to 08am', label: 'Morning- 06am to 08am' },
        { value: 'Evening- 16pm to 18pm', label: 'Evening- 16pm to 18pm' },
        { value: 'Night- 21pm to 23pm', label: 'Night- 21pm to 23pm' },
    ];

    return (
        <div>
            <Helmet>
                <title>Admin | Add Class</title>
            </Helmet>
            <div className="text-lg bg-black font-bold p-16 my-16 mx-2 rounded-md">
                <h2 className="text-4xl text-white font-lato text-center font-extrabold mb-6">
                    Add Class Page
                </h2>

                <form onSubmit={handleClassAdd} className="space-y-4">
                    {/* Class name and Image */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-lg font-bold">Class Name</span>
                            </label>
                            <input
                                required
                                type="text"
                                name="className"
                                placeholder="Class Name"
                                className="input input-bordered input-double-line"
                            />
                        </div>
                        <div className="form-control flex">
                            <div>
                                <label className="label">
                                    <span className="label-text text-white text-lg font-bold">Class Image</span>
                                </label>
                                <input
                                    onChange={e => {
                                        setImagePreview(URL.createObjectURL(e.target.files[0]))
                                    }}
                                    required
                                    type="file"
                                    name="image"
                                    className="input input-bordered input-double-line"
                                    accept="image/*"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Class Details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white text-lg font-bold">Class Description</span>
                        </label>
                        <textarea
                            required
                            name="description"
                            placeholder="Class Description"
                            className="input input-bordered input-double-line"
                        />
                    </div>
                    {/* Additional Info */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white text-lg font-bold">Duration</span>
                        </label>
                        <input
                            name="duration"
                            type="text"
                            placeholder="Class Duration"
                            className="input input-bordered input-double-line"
                        />
                    </div>
                    {/* Category */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-lg font-bold">Category</span>
                            </label>
                            <select
                                required
                                name="category"
                                className="select select-bordered input-double-line"
                            >
                                <option value="popular">Popular</option>
                                <option value="trending">Regular</option>
                                <option value="new">New</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-lg font-bold">Number of Booked</span>
                            </label>
                            <textarea
                                required
                                name="booked"
                                placeholder="Number Of Booked Class"
                                className="input input-bordered input-double-line"
                            />
                        </div>
                    </div>

                    {/* User Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-lg font-bold">Trainer Name</span>
                            </label>
                            <Select className='px-4 py-2 mt-2'
                                name='day'
                                options={trainer}
                                labelField='label'
                                valueField='label'
                                isMulti
                                onChange={setTrainerName}
                            />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" >Times</label>
                            <Select className='px-4 py-7'
                                name='time'
                                options={times}
                                labelField='label'
                                valueField='label'
                                isMulti
                                onChange={setSelectedTimes}
                            />
                        </div>

                    </div>
                    <button
                        disabled={loading}
                        type='submit'
                        className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
                    >
                        {loading ? (
                            <TbFidgetSpinner className='animate-spin m-auto' />
                        ) : (
                            ' Save & Continue'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNewClass;