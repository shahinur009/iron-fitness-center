import useAuth from "../../../hook/useAuth";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hook/axiosSecure/useAxiosSecure";
import { imageUpload } from "../../../Api/Utilities/Utilities";
import { TbFidgetSpinner } from "react-icons/tb";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";


const AddNewClass = () => {
    const { user, loading } = useAuth() || {};
    const axiosSecure = useAxiosSecure();

    const { mutateAsync } = useMutation({
        mutationFn: async classData => {
            const { data } = await axiosSecure.post(`/class`, classData)
            return data;
        },
        onSuccess: () => {
            console.log('Data saved successfully')
        }

    })

    const handleClassAdd = async (e) => {
        e.preventDefault();
        const form = e.target;
        const class_title = form.class_title.value;
        const description = form.description.value;
        const image = form.image.files[0];
        const admin = {
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
        }
        try {
            const image_url = await imageUpload(image)
            const classData = { class_title, description, image: image_url, admin }
            console.table(classData)
            await mutateAsync(classData)
            toast.success('class add successfully')
        } catch (err) {
            console.log(err)
        }

    }


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
                                name="class_title"
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
                    {/* User Info */}
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