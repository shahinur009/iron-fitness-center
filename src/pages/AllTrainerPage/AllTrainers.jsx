import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/axiosPublic/useAxiosPublic";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import TrainerCard from "./TrainerCard";

const AllTrainers = () => {
    const axiosPublic = useAxiosPublic();

    const { data: trainers = [], isLoading } = useQuery({
        queryKey: ['trainers'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/trainers');
            return data;
        }
    })
    console.log(trainers)

    if (isLoading) return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>

    return (
        <div>
            <Helmet>
                <title>IRON | All Trainers</title>
            </Helmet>
            <SectionTitle
                heading={'Our All Trainers'}>
            </SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {
                    trainers.map(trainer => <TrainerCard
                        key={trainer._id}
                        trainer={trainer}
                    ></TrainerCard>)
                }
            </div>

        </div>
    );
};

export default AllTrainers;