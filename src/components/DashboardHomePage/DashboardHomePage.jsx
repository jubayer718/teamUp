import React from "react";
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

const DashboardHomePage = () => {
  return (
    <div className="bg-gray-200">
      <div className="p-3">
        <div className="text-2xl font-bold p-3">Home</div>
        <div className="text-center ">
          <p className="font-semibold">Sunday, March 16</p>
          <h4 className="text-3xl pb-4">Good evening, Jannatun</h4>
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
                  <GoCheck /> 0 tasks completed
                </p>
                <p className="flex gap-1 items-center ">
                  <FiUsers /> 0 collaborators
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
            <div className="card  bg-blue-100 card-sm shadow-sm">
              <div className="card-body">
                <h1 className="text-2xl text-blue-500"><LiaClipboardListSolid /></h1>
                <h2 className="card-title">Project intake</h2>
                <p className="text-gray-500 ">
                Automatically capture, prioritize, and follow through on requests so teams have more time to get work done.
                </p>
                <div className="justify-start card-actions">
                <button className="btn">Get Started</button>
                </div>
              </div>
            </div>

            <div className="card  bg-green-50 card-sm shadow-sm">
              <div className="card-body">
                <h1 className="text-2xl text-green-300"><FiTriangle /></h1>
                <h2 className="card-title">Goal management</h2>
                <p className="text-gray-500 ">
                Connect your company objectives and the work that supports them, so teams can get the right things done.
                </p>
                <div className="justify-start card-actions">
                <button className="btn">Get Started</button>
                </div>
              </div>
            </div>

            <div className="card  bg-orange-50 card-sm shadow-sm">
              <div className="card-body">
                <h1 className="text-2xl text-orange-300"><LiaClipboardListSolid /></h1>
                <h2 className="card-title">Project management</h2>
                <p className="text-gray-500 ">
                Track projects from start to finish to keep your team in sync and hitting goals on schedule.
                </p>
                <div className="justify-start card-actions">
                <button className="btn">Get Started</button>
                </div>
              </div>
            </div>
          </div>

          </div>

         <div className="grid md:grid-cols-2 gap-3 grid-cols-1 mb-14">
         <div className="bg-white p-4 mt-9 rounded-3xl">
           <div className="flex justify-between items-center">
           <div className="flex gap-4">
              <Image className="rounded-full"  src={girl} alt="Footer Image" width={70} height={70} ></Image>
              <h2 className="flex gap-3 items-center">My tasks <span className="text-gray-400"><FaLock /></span></h2>
            </div>
            <p><HiDotsHorizontal /></p>
           </div>
           <div className="flex gap-5 items-center ml-[83px] -mt-7">
            <p>Upcoming</p>
            <p>Overdue(1)</p>
            <p>Completed</p>
           </div>
           <hr className="text-gray-300 mt-5" />
           <div className="px-6 py-2">
            <p className="text-gray-500 hover:text-black"><span className="text-xl">+ </span> Create task</p>
            <hr className="text-gray-300 mt-2" />
            <div className="flex justify-between items-center mt-1">
              <p className="flex gap-4 items-center mt-1"><span className="hover:bg-green-100 rounded-full"><CiCircleCheck /></span> jhfjn</p>
             <div className="flex gap-2 items-center">
             <p className="bg-green-100 text-black p-1 px-4 rounded-xl mt-1">hfuisjdfhla....</p>
             <p className="text-green-400">Mar 17-Today</p>
             </div>
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
           <div className="px-6 py-2">
            <p className="text-gray-500 hover:text-black my-6 flex gap-2 items-center"><span className="text-2xl border border-dotted px-4 py-2 rounded-2xl"> + </span> Create Project</p>
            <div className="flex justify-between items-center mt-1">
              <p className="flex gap-4 items-center mt-1"><span className="text-5xl bg-green-300 rounded-2xl text-white"><LiaClipboardListSolid /></span> jhfjn</p>
             <div className="flex gap-2 items-center">
             <p><HiDotsHorizontal /></p>
             </div>
            </div>
          
           </div>
          </div>
          
          <div className="bg-white p-4 mt-9 rounded-3xl">
           <div className="flex justify-between items-center">
           <div className="flex gap-4">
              <h2 className="flex gap-3 items-center font-semibold">People</h2>
              <p>
                  <label>
                    <select className="text-xs">
                      <option>Frequent Collaboraters</option>
                      <option>Recent Collaborate</option>
                      <option>Recent Collaborate</option>
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
           <div className="">
            <p className="text-center  text-gray-400">Invite your teammates to collaborate in ReamUp</p>
           <div className="flex justify-center"> <button className="btn my-3 ">Invite teammates</button></div>
           </div>
          </div>

         </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;
