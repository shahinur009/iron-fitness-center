import useAxiosPublic from "../../hook/axiosPublic/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link, } from "react-router-dom";

const AllClassesCard = ({ singleClass }) => {
  const { class_title, image, description, _id } = singleClass;

  const axiosPublic = useAxiosPublic();

  const { data: trainers = [], isLoading } = useQuery({
    queryKey: ["trainers", _id],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/trainers/class/${_id}`);
      return data;
    },
  });
  console.log(trainers);

  if (isLoading)
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin bg-orange-400"></div>
    );

  return (
    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-lg border dark:bg-gray-50 dark:text-gray-800">
      <div>
        <img
          src={image}
          alt=""
          className="object-cover rounded-xl w-full mb-4 h-44 sm:h-96 dark:bg-gray-500"
        />
        <h2 className="mb-1 text-xl font-bold">
          <span className="text-violet-500 text-xl font-bold">Class Name:</span> {class_title}
        </h2>
        <br />
        <hr /><hr />
        <p className="text-sm dark:text-gray-600"><span className="font-bold">Description: </span> {description}</p>
      </div>
      <div className="">
        <div className="">
          <h1 className="font-bold ">Trainer list of this class</h1>
          <p>----------------------------------------------</p>
          <div className="grid grid-cols-5">
            {trainers?.map((trainer) => {
              return (
                <Link key={trainer?._id} to={"/trainer/" + trainer?._id}>
                  <img
                    src={trainer?.image}
                    className="rounded-[50%] h-12 w-12"
                    alt=""
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllClassesCard;