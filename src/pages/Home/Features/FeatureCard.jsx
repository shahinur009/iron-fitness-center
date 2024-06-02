


const FeatureCard = ({ img, title, description }) => {
    return (
        <div className="w-full md:max-w-md p-4 shadow-lg border-y-2 border-r-2 rounded-md m-3 dark:bg-gray-50 dark:text-gray-800">
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={img} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                </div>
                <div className="space-y-2">
                    <a rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-xl font-bold dark:text-violet-600">{title}</h3>
                    </a>
                    <p className="leading-snug dark:text-gray-600">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;
