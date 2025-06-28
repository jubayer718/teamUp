'use client'
import React, { useState } from 'react';
import useProjects from '../../../components/Hooks/useProjects';
import Image from 'next/image';
import useAxiosPublic from '../../../components/useAxiosPublic';
import Swal from 'sweetalert2';
import { useUser } from '../../../context/UserContext';


const AllProject = () => {
  const { user } = useUser()
  const [project, reface] = useProjects();
  const axiosPublic = useAxiosPublic();
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleApproved = async (id) => {
    const { data } = await axiosPublic.patch(`/projects/approve/${id}`);
    if (data.modifiedCount > 0) {
      Swal.fire(`${project.find(pro => pro._id === id)?.name} is approve`)
    }
    reface()
  }
  const handleDecline = async (id) => {
    setSelectedProjectId(id);
    document.getElementById('my_modal_1').showModal();



    // const { data } = await axiosPublic.patch(`projects/decline/${id}`);
    // if (data.modifiedCount > 0) {
    //   document.getElementById('my_modal_1').showModal();
    // }
    // reface()
  }
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axiosPublic.delete(`/projects/${id}`);

        if (data.deletedCount > 0) {

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }


        reface()
      }
    });


  }
  const makePremium = (id) => {

  }
  const submitDeclineCause = async (e) => {
    e.preventDefault();
    const form = e.target;
    const causeData = {
      cause: form.cause.value,
      date: new Date().toLocaleDateString('en-US', { hour: 'numeric', day: '2-digit', month: 'numeric' }),
      declineAuthor: user?.displayName,
    }
    const { data } = await axiosPublic.put(`/projects/decline/${selectedProjectId}`, causeData);
    if (data.modifiedCount > 0) {
      Swal.fire("the project declined")
      document.getElementById('my_modal_1').close();
      form.reset();
      reface();
      setSelectedProjectId(null)

    }



  }
  return (
    <div className="p-4">
      {/* modal */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}
      <dialog id="my_modal_1" className="modal">
        <form onSubmit={submitDeclineCause} action="">
          <div className="modal-box">
            <label htmlFor="declineCause " className=''>Decline Cause</label>
            <textarea className='w-full input input-border' placeholder='why make it decline' name="cause" id="declineCause" rows={10} cols={40} required></textarea>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
              <button className='btn btn-primary'>Send</button>
            </div>

          </div>
        </form>
      </dialog>

      <div className="overflow-x-auto rounded-xl shadow-xl bg-white">
        <table className="table table-zebra text-sm">
          {/* Table Head */}
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider">
            <tr>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Author</th>
              <th className="py-3 px-4">Posted Date</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {project.map((pro) => (
              <tr key={pro._id} className="hover:bg-gray-200 transition-all">
                {/* Title */}
                <td className="py-3 px-4 font-medium text-gray-900">
                  <div className="flex items-center gap-3">
                    <div>
                      <h2 className="text-base font-semibold">{pro.name}</h2>
                    </div>
                  </div>
                </td>

                {/* Author */}
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 mask mask-squircle overflow-hidden">
                      <Image
                        src={pro.user?.photoURL}
                        alt="Author"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{pro.user?.displayName}</h4>
                      <p className="text-xs text-gray-500">{pro.user?.email}</p>
                    </div>
                  </div>
                </td>

                {/* Posted Date */}
                <td className="py-3 px-4 text-sm text-gray-600">
                  {pro?.postedDate}
                </td>
                {/* Status */}
                <td className='
            
                 py-3 px-4
                 text-sm 
               text-gray-600'
                >
                  <p className={` p-2 rounded-3xl
                    
                    ${pro.status === "approved" && "bg-green-500 text-white"}
                    ${pro.status === "declined" && "bg-yellow-500 text-black"}
                    
                    `

                  }

                  >
                    {pro?.status}
                  </p>
                </td>

                {/* Actions */}
                <td className="py-3 px-4">
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleApproved(pro._id)}
                      className={`${pro.status === "approved" ? 'btn btn-xs bg-gray-300 cursor-not-allowed' : 'btn btn-xs bg-green-600 hover:bg-green-700 text-white'}`}
                       disabled={pro.status === "approved"}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleDecline(pro._id)}
                      className={` 
                      ${pro.status === "declined" ? "btn btn-xs bg-gray-300 cursor-not-allowed" : " btn btn-xs bg-yellow-400 hover:bg-yellow-500"}`}
                      disabled={pro.status === "declined"}
                    >
                      Decline
                    </button>
                    <button
                      onClick={() => handleDelete(pro._id)}
                      className="btn btn-xs bg-red-500 hover:bg-red-600 text-white"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => makePremium(pro._id)}
                      className="btn btn-xs bg-cyan-500 hover:bg-cyan-600 text-white"
                    >
                      Make Premium
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default AllProject;