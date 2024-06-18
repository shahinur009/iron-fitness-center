import Select from 'react-select';
import useAuth from '../../hook/useAuth';
import useAxiosSecure from '../../hook/axiosSecure/useAxiosSecure';
import toast from 'react-hot-toast';
import { useState } from 'react';

const BecomeATrainer = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [selectedDays, setSelectedDays] = useState([]);
    const [selectedTimes, setSelectedTimes] = useState([]);

    const handleTrainer = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const age = form.age.value;
        const photo = form.photo.value;
        const skill = selectedSkills.map(skill => skill.value);
        const day = selectedDays.map(day => day.value);
        const time = selectedTimes.map(time => time.value);
        const experience = form.experience.value;
        const status = form.status.value;
        const info = { name, email, age, photo, skill, day, time, experience, status }
        console.log(info)
        try {
            const currentUser = {
                email: user?.email,
                role: 'trainer',
                status: 'requested',
                info,
            }
            const { data } = await axiosSecure.post('/slots', { ...currentUser, ...info })
            console.log(data)
            if (data.insertedCount > 0) {
                toast.success('Your apply successfully received')
            } else {
                toast.success('wait for admin approval')
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
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
    const skills = [
        { value: 'Yoga', label: 'Yoga' },
        { value: 'Zumba Dance', label: 'Zumba Dance' },
        { value: 'Body Building', label: 'Body Building' },
        { value: 'Musculation', label: 'Musculation' },
        { value: 'Fitness Running', label: 'Fitness Running' },
        { value: 'Weight Lifting', label: 'Weight Lifting' },
        { value: 'Classic Yoga', label: 'Classic Yoga' },
    ];
    const times = [
        { value: 'Morning- 06am to 08am', label: 'Morning- 06am to 08am' },
        { value: 'Evening- 16pm to 18pm', label: 'Evening- 16pm to 18pm' },
        { value: 'Night- 21pm to 23pm', label: 'Night- 21pm to 23pm' },
    ];


    return (
        <div>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Become A Trainer Form</h2>

                <form onSubmit={handleTrainer}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Full Name</label>
                            <input id="username" defaultValue={user?.displayName} name="name" type="text" disabled placeholder="Full Name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Email Address</label>
                            <input id="emailAddress" disabled defaultValue={user?.email} name="email" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Age</label>
                            <input id="age" name="age" type="age" placeholder="Your age" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Profile Photo</label>
                            <input id="photo" name="photo" disabled type="text" placeholder="Photo URL" defaultValue={user?.photoURL} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Skill</label>
                            <Select className='px-4 py-2 mt-2'
                                name='Skill'
                                options={skills}
                                labelField='label'
                                valueField='label'
                                isMulti
                                onChange={setSelectedSkills}
                            />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Days</label>
                            <Select className='px-4 py-2 mt-2'
                                name='day'
                                options={options}
                                labelField='label'
                                valueField='label'
                                isMulti
                                onChange={setSelectedDays}
                            />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Times</label>
                            <Select className='px-4 py-2'
                                name='time'
                                options={times}
                                labelField='label'
                                valueField='label'
                                isMulti
                                onChange={setSelectedTimes}
                            />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Experience</label>
                            <input id="experience" name="experience" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Status</label>
                            <input id="status" name="status" type="text" className="block w-full px-4 py-2 mt-2 text-orange-500 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue='pending' />
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Apply</button>
                    </div>
                </form>
            </section>
        </div>
    );

};


export default BecomeATrainer;