import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/axiosPublic/useAxiosPublic";

const ClassCard = ({ singleClass}) => {
    const { class_title, image, description, _id } = singleClass;


    const axiosPublic = useAxiosPublic();

    const { data: trainers = [], isLoading } = useQuery({
        queryKey: ['trainers', _id],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/trainers/class/${_id}`);
            return data;
        }
    })
    console.log(trainers)

    if (isLoading) return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin bg-orange-400"></div>


    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
            <div>
                <img src={image} alt="" className="object-cover w-full mb-4 h-44 sm:h-96 dark:bg-gray-500" />
                <h2 className="mb-1 text-xl font-semibold"><span className="text-orange-700">Class Name:</span>   {class_title}</h2>
                <p className="text-sm dark:text-gray-600">{description}</p>
            </div>
            <div className="">
                <div className="">
                    <h1 className="font-bold ">Trainer list of this class</h1>
                    <div className="grid grid-cols-5">
                        <button aria-label="Share this post" type="button" >
                            <img src={image} className="rounded-[50%] h-12 w-12" alt="" />
                        </button>
                        <button aria-label="Share this post" type="button" >
                            <img src={image} className="rounded-[50%] h-12 w-12" alt="" />
                        </button>
                        <button aria-label="Share this post" type="button" >
                            <img src={image} className="rounded-[50%] h-12 w-12" alt="" />
                        </button>
                        <button aria-label="Share this post" type="button" >
                            <img src={image} className="rounded-[50%] h-12 w-12" alt="" />
                        </button>
                        <button aria-label="Share this post" type="button" >
                            <img src={image} className="rounded-[50%] h-12 w-12" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;

