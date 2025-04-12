import React from 'react';

import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import footerImg from "../../app/assets/image/appStore.png"
import footerImg2 from "../../app/assets/image/googleApp.png"
import Image from 'next/image';


const Footer = () => {
    return (

       <div className='bg-[#690031] border-2 border-t-amber-50 py-5 px-4 '>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 px-12 items-center container mx-auto'>
            <div>
                <p className='text-white text-center'>© 2025 team-up ltd</p>
            </div>


            <div className='flex gap-2 items-center text-[24px] '>
              
                <div className='relative'>
                <p className='bg-black  p-5 rounded-full'></p>
                <p className='text-white  absolute top-2 left-2 bottom-1'><FaXTwitter /></p>
                </div>

                <div className='relative'>
                <p className='bg-black  p-5 rounded-full'></p>
                <p className='text-white  absolute top-2 left-2 bottom-1'><FaLinkedinIn /></p>
                </div>
                <div className='relative'>
                <p className='bg-black  p-5 rounded-full'></p>
                <p className='text-white  absolute top-2 left-2 bottom-1'><FaInstagram /></p>
                </div>
                <div className='relative'>
                <p className='bg-black  p-5 rounded-full'></p>
                <p className='text-white  absolute top-2 left-2 bottom-1'><FaFacebookF /></p>
                </div>
                <div className='relative'>
                    <p className='bg-black  p-5 rounded-full'></p>
                <p className='text-white  absolute top-2 left-2 bottom-1'><CiYoutube /></p>
                </div>
            </div>

            <div>
                <p className='text-white text-center '><span className='hover:underline'>Terms</span> & <span className='hover:underline'>Privacy</span></p>
            </div>

            <div className='flex gap-3 items-center'>
                <div>
                <Image src={footerImg} alt="Footer Image" width={130} height={130} />
                </div>
                <div>
                <Image src={footerImg2} alt="Footer Image" width={130} height={130} />
                </div>
            </div>

        </div>
       </div>
    );
};

export default Footer;