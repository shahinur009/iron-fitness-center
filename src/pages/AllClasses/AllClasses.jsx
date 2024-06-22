import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/axiosPublic/useAxiosPublic";
import AllClassesCard from "./AllClassesCard";
import { useState } from "react";
import { Pagination } from "flowbite-react";

const AllClasses = () => {
    const axiosPublic = useAxiosPublic();
    const [totalPage, setTotalPage] = useState(1)
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page) => setCurrentPage(page);

    // const { data: allClass = [], isLoading } = useQuery({
    //     queryKey: ['class'],
    //     queryFn: async () => {
    //         const { data } = await axiosPublic.get('/class')

    //         return data
    //     }

    // })
    // console.log(allClass)
    const { data: allClass = [] , isLoading} = useQuery({
        queryKey: ['class', currentPage],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/class-home?page=${currentPage}`)
            setTotalPage(data.totalPages)
            return data.data;
        }

    })

    if (isLoading) return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    return (
        <div >
            {/* map here */}
            <div className="grid md:grid-cols-3 gap-6 my-16 shadow-lg">
                {allClass.map((singleClass) => <AllClassesCard key={singleClass._id} singleClass={singleClass} ></AllClassesCard>)}
            </div>
            <div className="flex justify-center items-center">
                <Pagination currentPage={currentPage} totalPages={totalPage} onPageChange={onPageChange} />
            </div>
        </div>

    );
};

export default AllClasses;