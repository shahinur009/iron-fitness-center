import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Ry9NMZQ/iron-fitness-banner.png)' }}>
                <div className="mt-96 md:ml-72 relative">
                    <Link to='/all-classes' type="submit" className="block bg-black text-white w-full px-10 py-2  text-center rounded-md dark:text-gray-50 dark:bg-violet-600">See All Classes</Link>
                </div>
            </div>
        </>
    );
};

export default Banner;