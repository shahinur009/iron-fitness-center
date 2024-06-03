import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hook/useAuth";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hook/axiosPublic/useAxiosPublic";

const TrainerDetails = () => {
    const { user } = useAuth();
    const { id } = useParams()
    const axiosPublic = useAxiosPublic()

    const { data: trainer = [], isLoading } = useQuery({
        queryKey: ['trainer', id],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/trainer/${id}`);
            return data;
        }
    })
    console.log(trainer)

    if (isLoading) return <div className="w-16 h-16 border-4 mx-auto  bg-yellow-500 border-dashed rounded-full animate-spin dark:border-violet-600"></div>

    return (
        <header className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-16 mx-auto">
                <div className="items-center lg:flex">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">{trainer.name}</h1>

                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">

                    </div>
                </div>
            </div>
        </header>
    );
};

export default TrainerDetails;