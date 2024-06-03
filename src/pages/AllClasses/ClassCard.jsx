import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/axiosPublic/useAxiosPublic";

const ClassCard = ({ singleClass, index }) => {
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

    if (isLoading) return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>


    return (
        <tr >
            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                <div>
                    <h2 className="font-medium text-gray-800 dark:text-white ">{index + 1}</h2>
                </div>
            </td>
            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                <div>
                    <h2 className="font-medium text-gray-800 dark:text-white ">{class_title}</h2>
                </div>
            </td>
            <td className="text-sm font-medium ">
                <div>
                    <img src={image} className=" w-48 h-48 rounded-md" />
                </div>
            </td>

            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div>
                    <p className="text-gray-500 dark:text-gray-400">{description}</p>
                </div>
            </td>
            {/* trainer data map */}
            {
                trainers.map(trainer => <td key={trainer._id} className="p-4 text-sm whitespace-nowrap">
                    <div className="flex items-center gap-1">
                        <img className="object-cover w-10 h-10 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src={trainer.image} alt="" />
                    </div>
                </td>)
            }
        </tr>
    );
};

export default ClassCard;

