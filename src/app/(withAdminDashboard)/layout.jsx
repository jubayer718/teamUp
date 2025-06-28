'use client';
import React, { useState } from 'react';
import Logo from '../assets/svgs/Logo';
import Link from 'next/link';
import { FaPlus, FaProjectDiagram, FaUser } from 'react-icons/fa';
import { IoAddCircle, IoChatbox, IoHomeOutline } from 'react-icons/io5';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { MdMessage, MdNotificationAdd } from 'react-icons/md';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { RiTeamFill } from "react-icons/ri";
import { GoProject } from "react-icons/go";
import { useUser } from "../../context/UserContext"
import Image from 'next/image';
const AdminDashboardLayout = ({ children }) => {
    const { user, loading } = useUser();
    // console.log(user);
    const [isActiveMenu, setIsActiveMenu] = useState('dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
     if (loading) {
    return <div className="flex items-center justify-center">
      <span className="loading loading-bars  loading-xl"></span>
    </div>
  }

    return (
        <div className="flex flex-col h-screen">
            {/* Top Navbar */}
            <div className='flex items-center z-50 sticky top-0 w-full justify-between px-6 py-3 bg-[#2e2e30] border-b border-[#ffffff6e]'>
                <div className='flex items-center gap-3 '>
                    <button className="lg:hidden text-white" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        {isSidebarOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
                    </button>
                    <span className="hidden lg:flex"><Logo /></span>

                    <h2 className='text-2xl hidden lg:flex text-white font-bold'>TeamUp</h2>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className=" cursor-pointer m-1">
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <Image
                                    src={user?.photoURL}
                                    width={40}
                                    height={40}
                                    alt='Profile pic'
                                    className='rounded-full '
                                />
                            </div>
                        </div>
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><Link href={'/'}>Main Home</Link></li>
                       
                    </ul>
                </div>

            </div>

            {/* Layout Container */}
            <div className="flex flex-1 bg-base-200">
                {/* Sidebar */}
                <div className={`fixed lg:relative w-64 h-full bg-[#2e2e30] text-white p-4 flex flex-col gap-4 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-64"} lg:translate-x-0`}>
                    <ul className="space-y-2">
                        <li className="p-2 rounded-lg cursor-pointer">
                            <div className="dropdown dropdown-right">
                                <div tabIndex={0} role="button" className="btn bg-[#3d3e40] hover:text-[#f5f4f3] btn-outline rounded-full border m-1">
                                    <FaPlus className='text-xl text-white bg-[#ff584a] p-1 rounded-full' /> Create
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">

                                  

                                    <li><Link onClick={() => setIsActiveMenu("project")} className={`flex gap-3 items-center text-black ${isActiveMenu === "project" && 'bg-[#454547] text-white rounded-lg px-2 py-2'}`} href='/project'><FaProjectDiagram />Project</Link></li>

                                    <li><Link onClick={() => setIsActiveMenu("message")} className={`flex gap-3 items-center text-black ${isActiveMenu === "message" && 'bg-[#454547] text-white rounded-lg px-2 py-2'}`} href='/message'><MdMessage /> Message</Link></li>

                                    {/* <li><Link onClick={() => setIsActiveMenu("in")} className={`flex gap-3 items-center text-black ${isActiveMenu === "addTask" && 'bg-[#454547] text-white rounded-lg px-2 py-2'}`} className='text-black' href='/invite'>Invite</Link></li> */}
                                </ul>
                            </div>
                        </li>
                        <li className="p-2 rounded-lg cursor-pointer">
                            <Link onClick={() => setIsActiveMenu('adminDashboard')} href='/adminDashboard' className={`flex gap-3 items-center ${isActiveMenu === 'adminDashboard' && 'bg-[#454547] rounded px-2 py-2'}`}>
                                <IoHomeOutline className='text-xl' /> Dashboard
                            </Link>
                        </li>
                        <li className="p-2 rounded-lg cursor-pointer"><Link onClick={() => setIsActiveMenu("allUser")} className={`flex gap-3 items-center ${isActiveMenu === 'allUser' && 'bg-[#454547] rounded-lg px-2 py-2'}`} href={'/allUser'}><FaUser className='text-xl'></FaUser>AllUser</Link></li>

                          <li className='p-2 rounded-lg cursor-pointer'><Link href={'/allProject'} onClick={() => setIsActiveMenu("allProject")} className={`flex gap-3 items-center ${isActiveMenu === 'allProject' && 'bg-[#454547] rounded-lg px-2 py-2'}`}>
                                        <GoProject /> All Project
                                    </Link>
                                    </li>



                        <li className="p-2 rounded-lg cursor-pointer">
                            <Link onClick={() => setIsActiveMenu('my-task')} href='/my-task' className={`flex gap-3 items-center ${isActiveMenu === 'my-task' && 'bg-[#454547] rounded px-2 py-2'}`}>
                                <IoIosCheckmarkCircleOutline className='text-xl' /> My Tasks
                            </Link>
                        </li>
                        <li className="p-2 rounded-lg cursor-pointer">
                            <Link onClick={() => setIsActiveMenu('inbox')} href='/inbox' className={`flex gap-3 items-center ${isActiveMenu === 'inbox' && 'bg-[#454547] rounded px-2 py-2'}`}>
                                <MdNotificationAdd className='text-xl' /> Inbox
                            </Link>
                        </li>
                        <div className="divider border-[#ffffff6e] border-b-1"></div>

                        <li className="p-2 rounded-lg cursor-pointer">
                            <Link href='/project' className={`flex gap-3 items-center justify-between `}>
                                Project <FaPlus className='text-xl text-white  p-1 rounded-full' />
                            </Link>
                        </li>
                        <li className="p-2 rounded-lg cursor-pointer">
                            <Link onClick={() => setIsActiveMenu('/project/1')} href='/project/1' className={`flex gap-3 items-center ${isActiveMenu === '/project/1' && 'bg-[#454547] rounded px-2 py-2'}`}>
                                <GoProject className='text-xl' /> Project name
                            </Link>
                        </li>
                        <div className="divider border-[#ffffff6e] border-b-1"></div>

                        <li className="p-2 rounded-lg cursor-pointer">
                            <Link href='/team' className='flex gap-3 items-center'>
                                Team
                            </Link>
                        </li>
                        <li className="p-2 rounded-lg cursor-pointer">
                            <Link onClick={() => setIsActiveMenu('/team/1')} href='/team/1' className={`flex gap-3 items-center ${isActiveMenu === '/team/1' && 'bg-[#454547] rounded px-2 py-2'}`}>
                                <RiTeamFill className='text-xl' /> My Workspace
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <div className="flex flex-col flex-1 overflow-y-auto ">

                    {children}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardLayout;