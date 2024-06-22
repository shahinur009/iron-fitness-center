import { FaAmericanSignLanguageInterpreting, FaSpinner } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hook/axiosPublic/useAxiosPublic";

const Login = () => {
    const { signIn, signInWithGoogle, loading } = useAuth();
    const axiosPublic = useAxiosPublic()
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'

    const handleLogin = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        navigate(from, { replace: true });

        try {
            await signIn(email, password)
            navigate(from, { replace: true })
            toast.success('login successfully')
        } catch (err) {
            console.log(err)
            toast.error(err.message)
        }

    }
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithGoogle()
            const { data } = await axiosPublic.put(`/user`, {

                email: result?.user?.email,
                name: result?.user?.displayName,
                role:'member'

            })
            console.log(data)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });
            navigate(from, { replace: true })
        } catch (error) {
            console.log(error)
            toast.error(error?.message)
        }
    }
    return (
        <>
            <Helmet>
                <title>IRON | Login</title>
            </Helmet>
            <div className="w-full py-1">
                <div className="w-full md:w-1/2 shadow-lg border-amber-500 border-2 max-w-md mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                    <h1 className="text-2xl font-bold text-center"> Please Login </h1>
                    <span><FaAmericanSignLanguageInterpreting className="text-5xl mx-auto" /></span>
                    <form onSubmit={handleLogin} noValidate="" action="" className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block dark:text-gray-600">Email</label>
                            <input type="email" name="email" id="username" placeholder="Your Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <button
                            disabled={loading}
                            type="submit" className="btn btn-success w-full p-3 text-center rounded-md dark:text-gray-50 dark:bg-violet-600">
                            {loading ? <FaSpinner className="animate-spin text-xl text-white mx-auto" /> : 'Login'}
                        </button>
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button onClick={handleGoogleSignIn} className="block bg-black text-white w-full p-3 text-center rounded-md dark:text-gray-50 dark:bg-violet-600">Sign in Google</button>
                    </div>
                    <Link to='/registration' className="text-xs text-center sm:px-6 dark:text-gray-600">Do not have an account?
                        <a rel="noopener noreferrer" href="#" className="underline dark:text-gray-800">Sign up</a>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Login;