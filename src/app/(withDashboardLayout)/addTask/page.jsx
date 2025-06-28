"use client"
import Swal from "sweetalert2";
import useAxiosPublic from "../../../components/useAxiosPublic";
import { useRouter } from "next/navigation";
import { useUser } from './../../../context/UserContext'


const image_hosting_key = process.env.NEXT_PUBLIC_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

// console.log(image_hosting_key);

const AddTask = () => {
  const { user,loading } = useUser();
  const axiosPublic = useAxiosPublic();
  const router = useRouter()
  if (loading) {
    return <div className="flex items-center justify-center">
      <span className="loading loading-bars  loading-xl"></span>
    </div>
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const image = form.image.files[0]
    const imageFormData = new FormData();
    imageFormData.append("image", image);

    const res = await axiosPublic.post(image_hosting_api, imageFormData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
    
    
    const taskValue = {
      title,
      description,
      email: user?.email,
      image:res.data.data.display_url,
      status: "TODO",
      condition:"upcoming",
      date: new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: '2-digit' })

    }
    // console.log(taskValue);
    const { data } = await axiosPublic.post('/task', taskValue);
    // console.log(data);
    if (data.insertedId) {
      Swal.fire("Task added successful")
      router.push("/my-task")

    }
  }
  return (
    <div className="hero  min-h-screen mt-16 ">
      <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="fieldset">

              <label className="label">Title</label>
              <input type="text" name="title" className="input input-bordered" required placeholder="title" />

              <label className="label">Description</label>
              <input type="text" name="description" className="input input-bordered" required placeholder="description" />

              <fieldset className="fieldset">

                <legend className="fieldset-legend">Pick Icon</legend>
                <input type="file" name="image"  className="file-input" />
              </fieldset>




              <button type="submit" className="btn btn-neutral mt-4">Add Task</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;