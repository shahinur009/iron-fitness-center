// import { useForm } from "react-hook-form";
import { RiRegisteredLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { imageUpload } from "../../Api/Utilities/Utilities";

const Registration = () => {
    const { createUser, updateUserProfile, signInWithGoogle, loading, setLoading, saveUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || "/";

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.files[0];
        const password = form.password.value;


        try {
            setLoading(true)
            // upload image form imgbb
            const image_url = await imageUpload(image)
            console.log(image_url)
            // user registration
            const result = await createUser(email, password)

            // save userName and photo in firebase
            await saveUser({ ...result.user, displayName: name })
            // update user profile
            await updateUserProfile(name, image_url)
            navigate(from, { replace: true })
            toast.success('user registration successfully')
            // error handle
        } catch (error) {
            console.error("Error creating user or updating profile:", error);
            toast.error(error.message);
        }
    };

    const handleGoogleSignIn = async () => {

        try {
            setLoading(true)
            const result = await signInWithGoogle();
            await saveUser({ ...result.user })


            toast.success('User Registration successfully');
            navigate(from, { replace: true })
        } catch (error) {
            console.log(error);
            toast.error(error?.message);
        }
    };

    return (
        <>
            <Helmet>
                <title>IRON | Registration</title>
            </Helmet>
            <div className="w-full py-1">
                <div className="w-full md:1/2 shadow-lg border-black border-2 max-w-md mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                    <h1 className="text-2xl font-bold text-center"> Please Registration </h1>
                    <span><RiRegisteredLine className="text-5xl mx-auto" /></span>
                    <form onSubmit={handleSubmit} noValidate="" className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block dark:text-gray-600">Username</label>
                            <input required type="text" name="name" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                            <input required type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="photo" className="block dark:text-gray-600">Photo URL</label>
                            <input required type="file" name="image" id="image"
                                accept="image/*" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                            <input required type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                        </div>
                        <button
                            disabled={loading}
                            type="submit" className="btn btn-success w-full p-3 text-center rounded-md dark:text-gray-50 dark:bg-violet-600">
                            {loading ? <FaSpinner className="animate-spin text-xl text-white mx-auto" /> : 'Registration'}
                        </button>
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        <p className="px-3 text-sm dark:text-gray-600">Registration with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button
                            disabled={loading}
                            onClick={handleGoogleSignIn}
                            className="block bg-black disabled:cursor-not-allowed text-white w-full p-3 text-center rounded-md dark:text-gray-50 dark:bg-violet-600">Registration in Google
                        </button>
                    </div>
                    <Link to='/login' className="text-xs text-center sm:px-6 dark:text-gray-600">Do you have an account?
                        <a rel="noopener noreferrer" href="#" className="underline dark:text-gray-800">Log in</a>
                    </Link>
                </div>
            </div >
        </>
    );
};

export default Registration;
