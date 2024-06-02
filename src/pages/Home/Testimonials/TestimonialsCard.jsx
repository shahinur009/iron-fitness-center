import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const TestimonialsCard = ({ review }) => {
    const { image, details, rating, name } = review;
    return (
        <div>
            <section className="p-6">
                <div className="container max-w-xl mx-auto">
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={rating}
                        readOnly
                    />
                    <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
                        <img src={image} alt="" className="w-20 h-20 rounded-full dark:bg-gray-500" />
                        <blockquote className="max-w-lg text-lg italic font-medium text-center">{details}</blockquote>
                        <div className="text-center dark:text-gray-600">
                            <p>{name}</p>
                        </div>
                        <div className="flex space-x-2">
                            <button type="button" aria-label="Page 1" className="w-2 h-2 rounded-full dark:bg-gray-900"></button>
                            <button type="button" aria-label="Page 2" className="w-2 h-2 rounded-full dark:bg-gray-400"></button>
                            <button type="button" aria-label="Page 3" className="w-2 h-2 rounded-full dark:bg-gray-400"></button>
                            <button type="button" aria-label="Page 4" className="w-2 h-2 rounded-full dark:bg-gray-400"></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TestimonialsCard;