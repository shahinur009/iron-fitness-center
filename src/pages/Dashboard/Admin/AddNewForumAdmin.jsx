import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/axiosSecure/useAxiosSecure";
import useAuth from "../../../hook/useAuth";
import Swal from "sweetalert2";
import { imageUpload } from "../../../Api/Utilities/Utilities";
import { Helmet } from "react-helmet-async";
import { TbFidgetSpinner } from "react-icons/tb";

const AddNewForumAdmin = () => {
  const { user, loading } = useAuth() || {};
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: async (ForumData) => {
      const { data } = await axiosSecure.post('/forum', ForumData);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["forums"]); // Ensure the forum data is refetched after a new post
      Swal.fire({
        title: "Success!",
        text: "Post added successfully",
        icon: "success",
        confirmButtonText: "Cool",
      });
    },
    onError: (error) => {
      Swal.fire({
        title: "Error!",
        text: error.response?.data?.message || "Failed to add post",
        icon: "error",
        confirmButtonText: "Try Again",
      });
      console.log(error);
    },
  });

  const handleClassAdd = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const image = form.image.files[0];
    const photoURL = user?.photoURL;
    const displayName = user?.displayName;
    const email = user.email;
    const role = user.role; // Include the user's role

    try {
      const image_url = await imageUpload(image);
      const ForumData = {
        title,
        description,
        image: image_url,
        photoURL,
        displayName,
        email,
        role, // Add role to ForumData
      };
      console.table(ForumData);
      await mutateAsync(ForumData);
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: "Error!",
        text: "Failed to upload image",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Admin | Add Forum</title>
      </Helmet>
      <div className="text-lg bg-violet-900 font-bold p-4 md:p-8 lg:p-16 my-16 mx-2 rounded-md">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-lato text-center font-extrabold mb-6">
          Add Post
        </h2>

        <form onSubmit={handleClassAdd} className="space-y-4">
          {/* Post Title and Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-lg font-bold">
                  Post Title
                </span>
              </label>
              <input
                required
                type="text"
                name="title"
                placeholder="Post Title"
                className="input input-bordered input-double-line p-3"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-lg font-bold">
                  Image
                </span>
              </label>
              <input
                required
                type="file"
                name="image"
                className="input input-bordered input-double-line p-3"
                accept="image/*"
              />
            </div>
          </div>
          {/* Post Details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white text-lg font-bold">
                Post Description
              </span>
            </label>
            <textarea
              required
              name="description"
              placeholder="Post Description"
              className="input input-bordered input-double-line p-3"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white text-lg font-bold">
                Admin Photo
              </span>
            </label>
            <label className="input-group">
              <input
                readOnly
                type="text"
                name="photoURL"
                placeholder="PhotoURL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* form name, email */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-white text-lg font-bold">
                  User Name
                </span>
              </label>
              <label className="input-group">
                <input
                  readOnly
                  type="text"
                  name="displayName"
                  placeholder="displayName"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-white text-lg font-bold">
                  User Email
                </span>
              </label>
              <label className="input-group">
                <input
                  readOnly
                  type="email"
                  name="email"
                  placeholder="User Email"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Submit Button */}
          <button
            disabled={loading}
            type="submit"
            className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-violet-500"
          >
            {loading ? (
              <TbFidgetSpinner className="animate-spin m-auto" />
            ) : (
              "Save Post"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewForumAdmin;