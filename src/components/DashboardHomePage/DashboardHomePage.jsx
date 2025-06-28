"use client"
import React, { useEffect, useState } from "react";
import { GoCheck } from "react-icons/go";
import { FiUsers } from "react-icons/fi";
import { CgMenuGridR } from "react-icons/cg";
import { FiTriangle } from "react-icons/fi";
import { LiaClipboardListSolid } from "react-icons/lia";
import { HiDotsHorizontal } from "react-icons/hi";
import Image from "next/image";
import girl from "../../app/assets/image/girl.png"
import { FaLock } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import girlImg from "../../app/assets/image/girl (2).png"
import { useUser } from "../../context/UserContext";
import useAxiosPublic from "../useAxiosPublic";
import Link from "next/link";
import Swal from "sweetalert2";
// import CountUp from "react-countup";
import useTasks from "../Hooks/useTasks";
import { useRouter } from "next/navigation";
import useProjects from "../Hooks/useProjects";


const DashboardHomePage = () => {
  const { user, loading } = useUser();
  const axiosPublic = useAxiosPublic();
  const [reface, tasks] = useTasks();
  const [project] = useProjects()
  const router = useRouter()

  // const [tasks, setTasks] = useState([])

  if (loading) {
    return <div className="flex items-center justify-center">
      <span className="loading loading-bars  loading-xl"></span>
    </div>
  }

  if (!user) {
    useRouter.push('/login')
  }

  const hour = new Date().getHours();
  const greetings = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening"

  const allMembers = project
    .filter(p => p.status === "approved")
    .flatMap(p => p.members);
  const uniqueMembers = [...new Set(allMembers)];

  const handleCreateProject = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      name: form.projectName.value,
      description: form.description.value,
      category: form.category.value,
      color: form.color.value,
      deadline: form.deadline.value,
      postedDate: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: '2-digit', year: 'numeric' }),
      members: form.members.value.split(',').map(email => email.trim()),
      status: 'pending',
      user: user,
    };

    const res = await axiosPublic.post("/projects", data);
    if (res.data.insertedId) {
      Swal.fire({
        title: `${form.projectName.value} created. Now, wait for admin review`,
        icon: "success",
        draggable: true
      });
    }

    document.getElementById('my_modal_1').close();
    form.reset()

  };


  const handleUpdateStatus = async (id) => {
    // console.log("hi");
    const { data } = await axiosPublic.put(`/tasks/${id}`)
    if (data.modifiedCount) {
      Swal.fire({
        title: "Drag me!",
        icon: "success",
        draggable: true
      });
    }
    reface();

  }



  return (
    <div className="bg-gray-200">
      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box w-full max-w-2xl">
          <h3 className="text-xl font-bold mb-4">Create New Project</h3>

          <form onSubmit={handleCreateProject} className="space-y-4">

            {/* Project Name */}
            <div>
              <label htmlFor="projectName" className="block font-medium mb-1">
                Project Name
              </label>
              <input
                id="projectName"
                name="projectName"
                type="text"
                required
                className="input input-bordered w-full"
                placeholder="Enter project name"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block font-medium mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="textarea textarea-bordered w-full"
                placeholder="Short description (optional)"
              ></textarea>
            </div>

            {/* Category Dropdown */}
            <div>
              <label htmlFor="category" className="block font-medium mb-1">
                Category
              </label>
              <select
                id="category"
                name="category"
                className="select select-bordered w-full"
              >
                <option>Personal</option>
                <option>Work</option>
                <option>Urgent</option>
                <option>Others</option>
              </select>
            </div>

            {/* Color Picker */}
            <div>
              <label htmlFor="color" className="block font-medium mb-1">
                Color
              </label>
              <input
                id="color"
                name="color"
                type="color"
                defaultValue="#00C897"
                className="w-12 h-10 p-1 border rounded"
              />
            </div>

            {/* Deadline */}
            <div>
              <label htmlFor="deadline" className="block font-medium mb-1">
                Deadline
              </label>
              <input
                id="deadline"
                name="deadline"
                type="date"
                className="input input-bordered w-full"
              />
            </div>

            {/* Team Members */}
            <div>
              <label htmlFor="members" className="block font-medium mb-1">
                Add Members (comma separated emails)
              </label>
              <input
                type="text"
                name="members"
                id="members"
                placeholder="Enter emails separated by commas"
                className="input input-bordered w-full"
                onBlur={(e) => {
                  const rawValue = e.target.value;
                  const emails = rawValue
                    .split(',')
                    .map(email => email.trim())
                    .filter(email => email.length > 0);
                  
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  const invalidEmails = emails.filter(email => !emailRegex.test(email));
                  if (invalidEmails.length) {
                    alert(`Invalid emails: ${invalidEmails.join(', ')}`);
                  }
                }}
              />

            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <form method="dialog">
                <button type="submit" className="btn btn-ghost">
                  Cancel
                </button>
              </form>
              <button type="submit" className="btn btn-primary">
                Create Project
              </button>
            </div>
          </form>
        </div>
      </dialog>


      <div className="p-3">
        <div className="text-2xl font-bold p-3">Home</div>
        <div className="text-center ">
          <p className="font-semibold">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
          <h4 className="text-3xl pb-4">{greetings}, {user?.displayName}</h4>
        </div>
        <div>
          <div className="md:flex justify-between pb-3">
            <div></div>
            <div className="p-3 px-4 bg-white rounded-3xl text-gray-400">
              <div className=" flex gap-6">
                <p>
                  <label>
                    <select className="">
                      <option>My Week</option>
                      <option>My Month</option>
                    </select>
                  </label>
                </p>
                <div className="h-5 w-px bg-gray-300"></div>

                <p className="flex gap-1 items-center ">
                  <GoCheck />{tasks.filter(task => task.condition === "completed").length} tasks completed
                </p>
                <p className="flex gap-1 items-center ">
                  <FiUsers /><span>{uniqueMembers.length} Members</span>
                  collaborators in project
                </p>
              </div>
            </div>
            <div>
              <button className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border mt-3.5">
                <span className="mr-2 text-xl">
                  <CgMenuGridR />
                </span>{" "}
                Customize
              </button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-3xl ">

            <div className="flex gap-4 items-center md: justify-between">
              <div className="flex gap-2">
                <h3 className="text-xl font-semibold">Advanced trial</h3>
                <p className="bg-green-100 p-1 px-3 rounded-xl text-xs text-green-500">27 days left</p>
              </div>
              <p><HiDotsHorizontal /></p>
            </div>
            <div className="flex gap-7 py-4">
              <p className="font-semibold text-gray-400 hover:text-black ">Explore</p>
              <p className="font-semibold text-gray-400 hover:text-black ">Manage</p>
            </div>
            <hr className="text-gray-300 -mt-4" />



            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 py-5">
              {tasks.map((task) => {
                return (
                  <div key={task._id} className="card  bg-blue-100 card-sm shadow-sm">
                    <div className="card-body">
                      <img className="w-14 h-14 rounded-full" src={task.image} alt="tasks icon" />
                      <h2 className="card-title"><strong>Title:</strong> {task?.title}</h2>
                      <p className="text-gray-500 ">
                        <span className="font-semibold">Description:</span> {task?.description}
                      </p>
                      <div className="justify-start card-actions">
                        <Link href={`/my-task/TaskDetails/${task._id}`} className="btn">Get Started</Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-3 grid-cols-1 mb-14">
            <div className="bg-white p-4 mt-9 rounded-3xl">
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <Image className="rounded-full" src={user?.photoURL} alt="profile img" width={40} height={40} ></Image>
                  <h2 className="flex gap-3 items-center">My tasks <span className="text-gray-400"><FaLock /></span></h2>
                </div>
                <p><HiDotsHorizontal /></p>
              </div>
              <div className="flex gap-5 items-center ml-[83px] -mt-3">
                <Link href={`/upcoming`}>Upcoming: ({tasks.filter(task => task.condition === "upcoming").length})</Link>
                <p>Overdue: (({tasks.filter(task => task.condition === "overdue").length}))</p>
                <p>Completed: ({tasks.filter(task => task.condition === "completed").length})</p>

              </div>
              <hr className="text-gray-300 mt-5" />
              <div className="px-6 py-2">
                <Link href={`/addTask`} className="text-gray-500 hover:text-black"><span className="text-xl">+ </span> Create task</Link>
                <hr className="text-gray-300 mt-2" />
                <div className=" mt-1">


                  {
                    tasks.map(task => {
                      return (
                        <div key={task._id} className="flex justify-between gap-2">
                          <button onClick={() => handleUpdateStatus(task._id)} className=" mt-1 "><span className="hover:text-black text-xl rounded-full"><CiCircleCheck className="hover:bg-green-400 rounded-full" /></span> </button>
                          <div className="flex gap-1">
                            <Link href={`/my-task/TaskDetails/${task._id}`} className="bg-green-100 text-black p-1 px-4 rounded-xl mt-1">{task.title.slice(1, 60)}....</Link>
                            <p className="text-green-400">{task?.date}</p>
                          </div>
                        </div>
                      )
                    })
                  }

                </div>
                <hr className="text-gray-300 mt-4" />
              </div>
            </div>

            <div className="bg-white p-4 mt-9 rounded-3xl">
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <h2 className="flex gap-3 items-center font-semibold">Projects</h2>
                  <p>
                    <label>
                      <select className="text-xs">
                        <option>Recents</option>
                        <option>Starred</option>
                      </select>
                    </label>
                  </p>
                </div>
                <p><HiDotsHorizontal /></p>
              </div>
              <div className="px-6 py-2 overflow-y-scroll">
                <button type="btn" onClick={() => document.getElementById('my_modal_1').showModal()} className="text-gray-500 hover:text-black my-6 flex gap-2 items-center cursor-pointer"><span className="text-2xl border border-dotted px-4 py-2 rounded-2xl"> + </span> Create Project</button>
                <div className="flex justify-between items-center mt-1">
                  <p className="flex flex-wrap gap-4 items-center mt-1">
                    {
                      project
                        .filter(pro => pro.status === "approved")
                        .map((pro, idx) => (
                          <div key={idx}  style={{ backgroundColor: pro.color }} className={`p-2 border-b   rounded-2xl text-white`}>
                            <h2 className="text-lg font-bold">{pro.name}</h2>
                            <p><strong>Deadline:</strong> {pro.deadline}</p>
                            <p><strong>Collaborators:</strong> {pro.members.length}</p>
                            <p><strong>Posted:</strong> {pro.postedDate}</p>
                          </div>
                        ))
                    }
                  </p>
                  <div className="flex gap-2 items-center">
                    <p><HiDotsHorizontal /></p>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-white p-4 mt-9 rounded-3xl">
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <h2 className="flex gap-3 items-center font-semibold">Projects</h2>
                  <p>
                    <label>
                      <select className="text-xs">
                        <option>Recents</option>
                        <option>Starred</option>
                      </select>
                    </label>
                  </p>
                </div>
                <p><HiDotsHorizontal /></p>
              </div>
              <div className="py-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex gap-4 items-center">
                    <Image src={girlImg} alt="girl photo" width={60} height={60}></Image>
                    <p className="py-4 px-3 bg-gray-300 w-[300px] rounded-2xl"></p>
                  </div>

                  <div className="flex gap-4 items-center">
                    <Image src={girlImg} alt="girl photo" width={60} height={60}></Image>
                    <p className="py-4 px-3 bg-gray-300 w-[300px] rounded-2xl"></p>
                  </div>


                  <div className="flex gap-4 items-center">
                    <Image src={girlImg} alt="girl photo" width={60} height={60}></Image>
                    <p className="py-4 px-3 bg-gray-300 w-[300px] rounded-2xl"></p>
                  </div>

                  <div className="flex gap-4 items-center">
                    <Image src={girlImg} alt="girl photo" width={60} height={60}></Image>
                    <p className="py-4 px-3 bg-gray-300 w-[300px] rounded-2xl"></p>
                  </div>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;
