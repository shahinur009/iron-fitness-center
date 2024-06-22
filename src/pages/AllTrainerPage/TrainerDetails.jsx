import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../hook/axiosPublic/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hook/useAuth";

const TrainerDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: trainer = {}, isLoading } = useQuery({
    queryKey: ["slot", id],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/slot/${id}`);
      return data;
    },
  });

  const { data: slotTime = {} } = useQuery({
    queryKey: ["slot", trainer?.email],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/slot-add/${trainer?.email}`);
      return data;
    },
    enabled: !!trainer?.email,
  });


  if (isLoading) {
    return (
      <div className="w-16 h-16 border-4 mx-auto bg-yellow-500 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    );
  }

  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          {/* Trainer information section */}
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <div className="max-w-2xl overflow-hidden bg-white dark:bg-gray-800">
                <img
                  className="object-center w-full h-64 px-32"
                  src={trainer.photo}
                  alt="Article"
                />

                <div className="p-6">
                  <div>
                    <span className="text-[14px] font-medium text-blue-600 uppercase dark:text-blue-400">
                      Trainer: {trainer.name}
                    </span>
                    <a
                      href="#"
                      className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                      role="link"
                    >
                      Details: {trainer.specialist}
                    </a>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {trainer.bio}
                    </p>
                    <span className="text-[14px] font-medium text-black uppercase dark:text-blue-400">
                      Experience: {trainer.experience}
                    </span>
                    <br />
                    <span className="text-[14px] font-medium text-black uppercase dark:text-blue-400">
                      Specialist: {trainer.otherInfo}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
              <div className="container mx-auto">
                {/* Become a trainer section */}
                <Link to="/becomeATrainer" className="btn-success btn w-full mb-5">
                  Become a Trainer
                </Link>

                {/* Available slots section */}
                <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase dark:text-violet-600">
                  For Booking
                </span>
                <h2 className="text-5xl font-bold text-center dark:text-gray-900">
                  Available Slots
                </h2>
                <div className="grid gap-6 my-16 lg:grid-cols-3">
                  {slotTime.day && slotTime.day.length > 0 && (
                    <>
                      <Link
                        to={"/bookingPage"}
                        state={{
                          slotTime: slotTime,
                          trainer:trainer,                          
                          selectedSlot: slotTime.day[0],
                        }}
                        className="flex flex-col bg-black text-white p-8 space-y-4 rounded-md dark:bg-gray-50"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">
                          1
                        </div>
                        <p className="text-2xl font-semibold">{slotTime.day[0]}</p>
                      </Link>
                      <Link
                        to={"/bookingPage"}
                        state={{
                          slotTime: slotTime,
                          trainer:trainer,
                          selectedSlot: slotTime.day[1],
                        }}
                        className="flex flex-col bg-black text-white p-8 space-y-4 rounded-md dark:bg-gray-50"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">
                          2
                        </div>
                        <p className="text-2xl font-semibold">{slotTime.day[1]}</p>
                      </Link>
                      <Link
                        to={"/bookingPage"}
                        state={{
                          slotTime: slotTime,
                          trainer:trainer,
                          selectedSlot: slotTime.day[2],
                        }}
                        className="flex flex-col bg-black text-white p-8 space-y-4 rounded-md dark:bg-gray-50"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">
                          3
                        </div>
                        <p className="text-2xl font-semibold">{slotTime.day[2]}</p>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TrainerDetails;
