"use client"
import Image from "next/image";
import teamPic1 from "./../../app/assets/image/team.jpg"
import teamPic2 from "./../../app/assets/image/collaborationImg.jpg"
import { easeOut, motion } from 'framer-motion';
import Link from "next/link";
import useAdmin from "../Admin/useAdmin";
const HeroSection = () => {
  const [admin] = useAdmin();
  const MotionImage = motion(Image);
  return (
    <div className=" bg-[#690031]">
       <section className=" container mx-auto flex flex-col md:flex-row items-center justify-between gap-5 px-8 md:px-16 lg:px-20 py-20 mt-16">
      {/* hero section ar text a #5D3FD3, #595CFF */}

      
      {/* Left Side - Text Content */}
      <div className="max-w-2xl text-center md:text-left flex-1">
        <motion.h1
          // animate={{ x: 50 }}
          // transition={{ duration: 2,delay:1,ease:easeOut,repeat:Infinity}}
          
          
          initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Collaborate with Your Team <motion.span
            animate={{ color: [' #339eff','#3395ff','#3733ff','#b533ff'] }}
            transition={{duration:2, delay:1, repeat:Infinity}}
            className="text-[#595CFF]">Effortlessly</motion.span>
        </motion.h1>
        <p className="mt-4 text-lg text-white">
          Manage tasks, communicate in real-time, and boost your productivity with our all-in-one team collaboration tool.
        </p>
        <div className="mt-6">
          <button className="px-6 py-3 bg-[#595CFF] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
         {admin? <Link href={"/adminDashboard"}>Get Started</Link>: <Link href={"/dashboard"}>Get Started</Link>}
          </button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="mt-10 md:mt-0 flex-1">
        <MotionImage
          animate={{ y: [50, 100, 50] }}
          transition={{duration:10, repeat:Infinity}}
      src={teamPic1}
      alt="Picture of the author"
      className="w-72 max-w-sm rounded-t-[40px] rounded-r-[40px] border-l-white border-b-white border-t-0 border-r-0 border-[6px]"
        />
        <MotionImage
          animate={{ x: [60, 90, 60] }}
          transition={{duration:10,delay:5, repeat:Infinity}}
      src={teamPic2}
      alt="Picture of the author"
      className="w-64 max-w-sm rounded-t-[40px] rounded-r-[40px] border-l-white border-b-white border-t-0 border-r-0 border-[6px]"
        />
        
      </div>
    </section>
   </div>
  );
};

export default HeroSection;
