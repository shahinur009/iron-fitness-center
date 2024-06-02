
const ClassCards = ({ singleClass }) => {
    const { class_title, image, instructor, description, } = singleClass;

    return (
        <div className="max-w-sm max-h-screen w-full h-full bg-black rounded-lg border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 text-white">
            <a href="#">
                <img className="rounded-t-lg" src={image} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">{class_title}</h5>
                </a>
                <p className="font-semibold">Trainer: {instructor}</p>
                <p className="mb-3 font-normal dark:text-gray-400">{description}</p>

            </div>
        </div>
    );
};

export default ClassCards;