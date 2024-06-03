import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const TrainerCard = ({ trainer }) => {
    const { name, specialist,
        experience, bio, image, _id, socialIcons, slots } = trainer;
    return (

        <div className="flex p-5 flex-col items-center transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
            <img className="object-cover  h-32 rounded-full ring-4 ring-gray-300" src={image} alt="" />
            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white"> <span className="text-red-600">Trainer:</span> {name}</h1>

            <p className="mt-2 font-bold text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300"><span className="text-red-600">Specialty: </span>{specialist}</p>
            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300 font-bold"><span className="text-red-600">Experience: </span>
                {experience}</p>
            <div className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300 font-bold"><span className="text-red-600">Available Slots: </span>
                <ul>
                    <li>{slots[0]}</li>
                    <li>{slots[1]}</li>
                    <li>{slots[2]}</li>
                </ul>
            </div>

            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{bio}</p>
            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300 flex gap-3">
                <FaFacebook to={socialIcons.facebook} className="text-4xl" />
                <FaTwitter to={socialIcons.twitter} className="text-4xl" />
                <FaInstagram to={socialIcons.instagram} className="text-4xl" />
            </p>
            <Link to={`/trainer/${_id}`} className="btn mt-6 btn-lg">See Details</Link>
        </div>

    );
};

export default TrainerCard;