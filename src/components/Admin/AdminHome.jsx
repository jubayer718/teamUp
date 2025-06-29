
"use client";

import useAllUsers from "../Hooks/useAllUsers";


const AdminHome = () => {
  const [users]=useAllUsers()
  return (
    <div className='mt-4'>
      <div className="shadow-2xl w-40 h-24 rounded-lg ml-4 p-4 text-center">
        <h1 className=" font-bold">Total User: <span className="font-bold  text-lg text-orange-500">{users.length}</span></h1>
      </div>
    </div>
  );
};

export default AdminHome;