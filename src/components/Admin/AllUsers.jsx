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
                              src={user?.photo}
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