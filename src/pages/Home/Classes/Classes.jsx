import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import ClassCards from "./ClassCards";
import { data } from "autoprefixer";
import { Link } from "react-router-dom";

const Classes = () => {
    const [allClass, setAllClasses] = useState([])

    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => {
                const popularData = data.filter(singleClass => singleClass.category === 'popular')
                setAllClasses(popularData)
            })
    }, [])
    return (
        <div>
            <SectionTitle
                heading={'Features Classes'}>
            </SectionTitle>
            <div>
                <div className="grid md:grid-cols-2 text-white my-5 lg:grid-cols-3 gap-5">
                    {
                        allClass.map(singleClass => <ClassCards
                            key={data._id} singleClass={singleClass}
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