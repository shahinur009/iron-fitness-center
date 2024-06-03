import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import ClassCards from "./ClassCards";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hook/axiosPublic/useAxiosPublic";

const Classes = () => {
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
    // console.log(allClass)

    if (isLoading) return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    return (
        <div>
            <SectionTitle
                heading={'Features Classes'}>
            </SectionTitle>
            <div>
                <div className="grid md:grid-cols-2 text-white my-5 lg:grid-cols-3 gap-5">
                    {
                        allClass.map(singleClass => <ClassCards
                            key={singleClass._id} singleClass={singleClass}
                        ></ClassCards>)
                    }

                </div>
                <div className=" text-center">
                    <Link to='/all-classes' className="btn px-10 btn-lg bg-black text-white"> See More Classes</Link>
                </div>
            </div>
        </div>
    );
};

export default Classes;