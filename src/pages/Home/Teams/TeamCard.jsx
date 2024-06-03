
const TeamCard = ({ team }) => {
    const { name, specialty, experience, bio, image } = team;
    return (
        <div>
            <div className="flex p-5 flex-col items-center transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                <img className="object-cover  h-32 rounded-full ring-4 ring-gray-300" src={image} alt="" />
                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">{name}</h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{specialty}</p>
                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{experience}</p>
                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{bio}</p>
            </div>
        </div>
    );
};

export default TeamCard;