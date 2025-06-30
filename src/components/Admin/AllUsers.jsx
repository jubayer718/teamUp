'use client'

import Image from "next/image";
import useAllUsers from "../Hooks/useAllUsers";
import {FaUser} from 'react-icons/fa'
import useAxiosPublic from "../useAxiosPublic";
import useAdmin from "./useAdmin";
import { useEffect } from "react";
import toast from "react-hot-toast";


const AllUsers = () => {
  const [users,refetch] = useAllUsers();
  const axiosPublic = useAxiosPublic();

  

  const handleMakeAdmin = async(email) => {
    const response = await axiosPublic.put(`/make-admin/${email}`);
    if (response.data.modifiedCount > 0) {
      refetch();
      toast.success('User made admin successfully');
    } else {
      toast.error('Failed to make user admin');
    }
  }

  const handleRemoveUser = async (email) => { 
    const response = await axiosPublic.delete(`/remove-user/${email}`);
    if (response.data.deletedCount > 0) {
      refetch();
      toast.success('User removed successfully');
    } else {
      toast.error('Failed to remove user');
    }
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                NO:
              </th>
              <th>Name</th>
              <th>role</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, i) => {
                return (
                  <tr key={i}>
                    <th>
                      {i + 1}
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <Image
                              src="data:image/jpeg;base64,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"
                              alt="users photo"
                              width={48}
                              height={48}

                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{user.name }</div>
                       
                        </div>
                      </div>
                    </td>
                    <td >
                   <div className={` flex items-center gap-1 p-3 rounded-md ${user.role==="admin"?"bg-green-500 text-white":"bg-amber-400 text-black"}`}> <FaUser/> <span >{user.role}</span></div>
                    </td>
                    <td >
                      <div className="flex flex-col gap-2">
                      <button onClick={()=>handleMakeAdmin(user.email)} className="btn bg-green-400 hover:bg-green-500">Make Admin</button>
                      <button onClick={()=>handleRemoveUser(user.email)} className="btn bg-red-400 hover:bg-red-500">Remove User</button>
                      </div>
                    </td>
                  </tr>
                )
              })
            }


          </tbody>

        </table>
      </div>
    </div>
  );
};

export default AllUsers;