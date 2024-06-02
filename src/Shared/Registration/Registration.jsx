import { useForm } from "react-hook-form";
import { RiRegisteredLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hook/axiosPublic/useAxiosPublic";
import toast from "react-hot-toast";


const Registration = () => {
    const { register, reset, handleSubmit, formState: { errors }, } = useForm()
    const { createUser, updateUserProfile, signInWithGoogle } = useAuth();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile updated')
                        reset();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Registration successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/')
                    })
                    .catch(err => console.log(err))
            })
    }
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithGoogle()
            const { data } = await useAxiosPublic.post(`/users`, {
                email: result?.user?.email,
                name: result?.user?.displayName,
            })
            console.log(data)
            toast.success('User Registration successfully')
            navigate(location?.state ? location.state : '/')


        } catch (error) {
            console.log(error)
            toast.error(error?.message)
        }
    }
    return (
        <>
            <Helmet>
                <title>IRON | Registration</title>
            </Helmet>
            <div className="w-full py-1">
                <div className="w-full md:1/2 shadow-lg border-black border-2 max-w-md mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                    <h1 className="text-2xl font-bold text-center"> Please Registration </h1>
                    <span><RiRegisteredLine className="text-5xl mx-auto" /></span>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block dark:text-gray-600">Username</label>
                            <input type="text" {...register("name", { required: true })} name="name" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            {errors.name && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                            <input type="email" {...register("email", { required: true })} name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            {errors.email && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="photo" className="block dark:text-gray-600">Photo URL</label>
                            <input type="text" {...register("photoURL", { required: true })} name="photoURL" id="photo" placeholder="photo url" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            {errors.photo && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                            <input type="password" {...register("password", { required: true })}
                                name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            {errors.password && <span className="text-red-600">This field is required</span>}
                        </div>
                        <button className="block bg-black text-white w-full p-3 text-center rounded-md dark:text-gray-50 dark:bg-violet-600">Registration</button>
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        <p className="px-3 text-sm dark:text-gray-600">Registration with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <Link to='/' onClick={handleGoogleSignIn} className="block bg-black text-white w-full p-3 text-center rounded-md dark:text-gray-50 dark:bg-violet-600">Registration in Google</Link>
                    </div>
                    <Link to='/login' className="text-xs text-center sm:px-6 dark:text-gray-600">Do you have an account?
                        <a rel="noopener noreferrer" href="#" className="underline dark:text-gray-800">Log in</a>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Registration;