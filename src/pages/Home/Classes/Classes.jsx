import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hook/axiosPublic/useAxiosPublic";
import ClassCards from "./ClassCards";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { Pagination } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Classes = () => {
    const axiosPublic = useAxiosPublic();
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page) => setCurrentPage(page);
    const [totalPage, setTotalPage] = useState(1)


    const { data: classes = [] } = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/class`)
            
            return data;
        }

    })


    return (

        <div className="my-10">
            <SectionTitle
                heading={'Popular Classes'}>
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    classes.map(item => <ClassCards
                        key={item._id}
                        item={item}
                    ></ClassCards>)
                }

            </div>
            <div className="w-full flex items-center justify-center">
                <Link to='all-classes' className="btn btn-success mx-auto w-1/2">See More</Link>
            </div>
        </div>
    );
};

export default Classes;