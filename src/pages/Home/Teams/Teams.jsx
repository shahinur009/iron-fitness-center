import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import TeamCard from "./TeamCard";

const Teams = () => {
    const [ourTeams, setOurTeams] = useState([])

    useEffect(() => {
        fetch('http://localhost:4009/trainer')
            .then(res => res.json())
            .then(data => setOurTeams(data))
    }, [])
    return (
        <section className="bg-white dark:bg-gray-900">
            <SectionTitle
                heading={'Our Teams'}>
            </SectionTitle>
            <div className="container px-6 py-5 mx-auto">
                <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                    Meet the dedicated professionals who make our fitness center exceptional. Our team of certified instructors and trainers are passionate about helping you achieve your fitness goals. With diverse specialties and years of experience, they are here to guide and motivate you every step of the way.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    {
                        ourTeams.map(team => <TeamCard
                            key={team.id}
                            team={team}
                        ></TeamCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Teams;