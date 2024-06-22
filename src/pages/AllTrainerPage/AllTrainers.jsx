import { Link } from "react-router-dom";
import useAxiosPublic from "../../hook/axiosPublic/useAxiosPublic";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const AllTrainers = () => {
  const axiosPublic = useAxiosPublic();

  const { data: slots = [], isLoading } = useQuery({
    queryKey: ['slots'],
    queryFn: async () => {
      const { data } = await axiosPublic.get('/slots');
      return data;
    }
  });

  if (isLoading) return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>;

  return (
    <div>
      <Helmet>
        <title>Fitness | Trainer Slots</title>
      </Helmet>
      <SectionTitle heading={'Available Trainer'}></SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {slots.map(slot => (
          <div key={slot._id} className="card bg-white p-4 shadow-md rounded-md">
            <h3 className="text-xl font-semibold mb-2">{slot.name}</h3>
            <p className="mb-2">Age: {slot.age}</p>
            <img src={slot.photo} alt={slot.name} className="w-full h-48 object-cover rounded-md mb-2" />
            {/* <p className="mb-2">Experience: {slot.experience}</p>
            <p className="mb-2">Skills: {slot.skill.join(', ')}</p>
            <p className="mb-2">Days: {slot.day.join(', ')}</p>
            <p className="mb-2">Time: {slot.time.join(', ')}</p> */}
            <Link to={`/slot/${slot._id}`} className="text-blue-500 hover:underline">
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">See More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTrainers;