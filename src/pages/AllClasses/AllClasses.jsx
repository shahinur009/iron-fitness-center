import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/axiosPublic/useAxiosPublic";
import ClassCard from "./ClassCard";

const AllClasses = () => {
    const axiosPublic = useAxiosPublic();

    const { data: allClass = [], isLoading } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/classes')
            // const popularDat = data.category === 'popular'
            // console.log(data)
            return data
        }

    })
    console.log(allClass)

    if (isLoading) return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-4">
            {/* map here */}
            {allClass.map((singleClass) => <ClassCard key={singleClass._id} singleClass={singleClass} ></ClassCard>)}
        </div>
    );
};

export default AllClasses;