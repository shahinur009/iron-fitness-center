import { useForm } from "react-hook-form";
import { RiRegisteredLine } from "react-icons/ri";
import { Link } from "react-router-dom";


const Registration = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <>
            <div className="w-full py-1">
                <div className="w-1/2 shadow-lg border-black border-2 max-w-md mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                    <h1 className="text-2xl font-bold text-center"> Please Registration </h1>
                    <span><RiRegisteredLine className="text-5xl mx-auto" /></span>
                    <form noValidate="" action="" className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block dark:text-gray-600">Username</label>
                            <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                            <input type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="photo" className="block dark:text-gray-600">Photo URL</label>
                            <input type="text" name="photo" id="photo" placeholder="photo url" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <button className="block bg-black text-white w-full p-3 text-center rounded-md dark:text-gray-50 dark:bg-violet-600">Registration</button>
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        <p className="px-3 text-sm dark:text-gray-600">Registration with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button className="block bg-black text-white w-full p-3 text-center rounded-md dark:text-gray-50 dark:bg-violet-600">Registration in Google</button>
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