import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <section className="flex items-center h-full sm:p-16 dark:bg-gray-50 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                    <img src="https://i.ibb.co/gRT6n8J/oops-404-error.jpg" alt="" />
                    <p className="text-3xl">You Find Not Found Please Try Another Way</p>
                    <Link to='/' rel="noopener noreferrer" href="#" className="px-8 py-3 bg-black text-white font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Back to homepage</Link>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;