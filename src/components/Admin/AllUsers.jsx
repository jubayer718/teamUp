'use client'

import Image from "next/image";
import useAllUsers from "../Hooks/useAllUsers";

const AllUsers = () => {
  const [users] = useAllUsers()

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
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
            {
              users.map((user,i) => {
                return ( 
                    <tr>
        <th>
          {i+1}
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
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
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