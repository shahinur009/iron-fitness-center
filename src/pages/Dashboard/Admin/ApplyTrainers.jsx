import { useEffect, useState } from "react";
import useAuth from "../../../hook/useAuth";
import useAxiosSecure from "../../../hook/axiosSecure/useAxiosSecure";
import toast from "react-hot-toast";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";


const ApplyTrainers = () => {
  const { loading } = useAuth();
  const [trainers, setTrainers] = useState([]);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectionMessage, setRejectionMessage] = useState("");
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const axiosSecure = useAxiosSecure();

  const fetchTrainer = () => {
    axiosSecure.get("/slot-slot",)
      .then((res) => setTrainers(res.data))
      .catch((error) => console.error("Error fetching trainers:", error));
  };

  const confirmTrainer = (email, make_trainer = false) => {
    axiosSecure.post(`/slot/make-trainer/${email}`, { make_trainer })
      .then((res) => {
        if (res.status) {
          toast.success("Trainer Status Changed Successfully");
        }
      })
      .finally(() => {
        fetchTrainer();
      });
  };

  const handleReject = (trainer) => {
    setSelectedTrainer(trainer);
    setShowRejectModal(true);
  };

  const submitRejection = () => {
    axiosSecure.post("/feedback", {
      email: selectedTrainer.email,
      message: rejectionMessage,
    })
      .then((res) => {
        if (res.status) {
          toast.success("message saved successfully");
          return axiosSecure.delete(`/slot/${selectedTrainer.email}`);
        } else {
          throw new Error("Failed to save feedback");
        }
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Application rejected and removed successfully");
          fetchTrainer(); // Fetch the updated list of trainers
        }
      })
      .catch((error) => {
        toast.error("An error occurred while rejecting the application");
        console.error("Error:", error);
      })
      .finally(() => {
        setShowRejectModal(false);
        setRejectionMessage("");
        setSelectedTrainer(null);
      });
  };

  useEffect(() => {
    fetchTrainer();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center my-12 bg-violet-900 mt-44 items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="mb-20 bg-white p-6 rounded-lg shadow-lg">
      <SectionTitle heading="Applied Trainers" />
      <div className="overflow-x-auto rounded-xl">
        <table className="min-w-full bg-white dark:bg-violet-500 divide-y divide-gray-200">
          <thead className="bg-violet-900 text-lg font-bold text-white">
            <tr className="text-left">
              <th className="px-4 py-3">Sl</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Age</th>
              <th className="px-4 py-3">Photo</th>
              <th className="px-4 py-3">Skill</th>
              <th className="px-4 py-3">Day</th>
              <th className="px-4 py-3">Time</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {trainers.map((trainer, index) => (
              <tr key={trainer._id} className="text-sm font-semibold text-gray-900 dark:text-white">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{trainer.email}</td>
                <td className="px-4 py-3">{trainer.status}</td>
                <td className="px-4 py-3">{trainer.info.name}</td>
                <td className="px-4 py-3">{trainer.info.age}</td>
                <td className="px-4 py-3">
                  <img
                    src={trainer.info.photo}
                    alt="Photo"
                    className="w-10 h-10 object-cover rounded-full"
                  />
                </td>
                <td className="px-4 py-3">{trainer.info.skill}</td>
                <td className="px-4 py-3">{trainer.info.day}</td>
                <td className="px-4 py-3">{trainer.info.time}</td>
                <td className="px-4 py-3 space-x-2">
                  <button
                    onClick={() => confirmTrainer(trainer.email, true)}
                    className="btn btn-sm bg-green-500 text-white hover:bg-green-700"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(trainer)}
                    className="btn btn-sm bg-red-500 text-white hover:bg-red-700"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Reject Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="modal-box bg-white p-6 rounded shadow-lg">
            <h3 className="font-bold text-lg">Reject Application</h3>
            <textarea
              className="w-full p-2 border rounded"
              placeholder="Write the reason for rejection..."
              value={rejectionMessage}
              onChange={(e) => setRejectionMessage(e.target.value)}
            />
            <div className="modal-action mt-4">
              <button className="btn" onClick={() => setShowRejectModal(false)}>Cancel</button>
              <button className="btn btn-danger" onClick={submitRejection}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplyTrainers;
