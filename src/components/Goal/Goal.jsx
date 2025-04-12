import React from 'react';
import banner from '../../../public/banner.png';
import banner2 from '../../../public/banner2.png';
import banner3 from '../../../public/banner3.png';
import banner4 from '../../../public/banner4.png';
import logo1 from '../../../public/logo1.svg';
import card1 from '../../../public/card1.png';
import card2 from '../../../public/card2.png';
import card3 from '../../../public/card3.png';
import Image from 'next/image';
import { LuGoal } from "react-icons/lu";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { GrTemplate } from "react-icons/gr";
import { FaArrowTrendUp, FaCircleArrowRight } from "react-icons/fa6";
import { SiAsana, SiLooker } from "react-icons/si";
import { FiArrowRightCircle } from "react-icons/fi";
import { LuChartNoAxesColumnIncreasing } from "react-icons/lu";
import { FaRegArrowAltCircleRight, FaSalesforce } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const Goal = () => {
    return (
        <div className='bg-[#FFFFFF] lg:container mx-auto'>
            <div className='my-5'>
                <h2 className='text-5xl font-semibold text-center'>Align work to goals</h2>
                <p className="text-lg text-center font-semibold my-5">Keep goals front and center by connecting them to daily work</p>
                <div className='lg:flex gap-4 mx-auto w-1/3'>
                    <button className='btn bg-black text-white p-8 text-xl rounded-4xl'>
                        Get Started
                    </button>

                    <button className='btn bg-[#FFFFFF] p-8 text-xl rounded-4xl border-1 border-black'>
                        Request a Demo
                    </button>
                </div>
            </div>

            <div className="my-12">
                <Image src={banner} alt='banner image'></Image>
            </div>

            <div className='lg:flex justify-between my-12 gap-4'>
                <div>
                    <h2 className='text-3xl font-semibold'>Centralize goal planning</h2>
                    <p className='text-xl font-semibold'>Set, track, and communicate about goals in one platform.</p>
                </div>
                <div>
                    <h2 className='text-3xl font-semibold'>Track goals in real time</h2>
                    <p className='text-xl font-semibold'>See progress instantly with custom dashboards.</p>
                </div>
                <div>
                    <h2 className='text-3xl font-semibold'>Write better objectives</h2>
                    <p className='text-xl font-semibold'>Ask AI to draft fully formed goals based on a plain description.</p>
                </div>

            </div>

            <div className='divider '></div>

            <div className='grid grid-cols-1 lg:grid-cols-2 my-12 gap-4'>
                <div className=''>
                    <h2 className='text-5xl font-bold'>Standardize goal-setting</h2>
                    <ul className='list-disc list-inside'>
                        <li className='text-xl font-semibold my-4' itemType='dot'>Start with a basic description, then ask AI to draft a SMART goal that’s specific, measurable, attainable, relevant, and time-bound.</li>

                        <li className='text-xl font-semibold my-4'>
                            Customize every part of your objective, from how it’s formatted to how you measure progress.
                        </li>

                        <li className='text-xl font-semibold my-4'>
                            Use Asana’s project template to streamline goal-setting, from drafting to final approvals.
                        </li>
                    </ul>
                    <div>
                        <h2 className='uppercase text-3xl opacity-50'>Features</h2>
                        <div className='flex gap-2 items-center'>
                            <LuGoal className='text-3xl'></LuGoal>
                            <p className='text-2xl font-semibold'>Goals </p>
                            <MdKeyboardArrowRight className='text-2xl' />
                        </div>
                        <div className='flex gap-2 items-center '>
                            <GrTemplate className='text-2xl'></GrTemplate>
                            <p className='text-2xl font-semibold'>Templates</p>

                            <MdKeyboardArrowRight className='text-2xl' />
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={banner2} alt='banner image'></Image>
                </div>
            </div>

            <div className="divider"></div>


            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-12'>
                <div className=''>
                    <h2 className='text-5xl font-bold'>Monitor performance</h2>
                    <ul className='list-disc list-inside'>
                        <li className='text-xl font-semibold my-4' itemType='dot'>Create custom reports to instantly see which goals are on track, off track, or at risk.</li>

                        <li className='text-xl font-semibold my-4'>
                            Automatically update each goal’s progress based on the projects and portfolios that support it
                        </li>

                        <li className='text-xl font-semibold my-4'>
                            Link reporting data from Salesforce to see real-time updates about deals, leads, and more.
                        </li>
                    </ul>
                    <div>
                        <h2 className='uppercase text-3xl opacity-50'>Features</h2>
                        <div className='flex gap-2 items-center'>
                            <FaArrowTrendUp className='text-3xl'></FaArrowTrendUp>
                            <p className='text-2xl font-semibold'>Reporting Dashboards </p>
                            <MdKeyboardArrowRight className='text-2xl' />
                        </div>
                        <div className='flex gap-2 items-center '>
                            <GrTemplate className='text-2xl'></GrTemplate>
                            <p className='text-2xl font-semibold'>App Integrations</p>

                            <MdKeyboardArrowRight className='text-2xl' />
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={banner3} alt='banner image'></Image>
                </div>
            </div>

            <div className="divider"></div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-12'>
                <div className=''>
                    <h2 className='text-5xl font-bold'>Write better goals</h2>
                    <ul className='list-disc list-inside'>
                        <li className='text-xl font-semibold my-4' itemType='dot'>Start with a basic description, then ask AI to draft a SMART goal that’s specific, measurable, attainable, relevant, and time-bound.</li>

                        <li className='text-xl font-semibold my-4'>
                            Customize every part of your objective, from how it’s formatted to how you measure progress.
                        </li>


                    </ul>
                    <div>
                        <h2 className='uppercase text-3xl opacity-50'>Features</h2>
                        <div className='flex gap-2 items-center'>
                            <SiAsana className='text-3xl'></SiAsana>
                            <p className='text-2xl font-semibold'>Smart goals</p>
                            <MdKeyboardArrowRight className='text-2xl' />
                        </div>

                    </div>
                </div>
                <div>
                    <Image src={banner4} alt='banner image'></Image>
                </div>
            </div>

            <div className="divider"></div>

            <div className='lg:flex gap-12'>

                <div className=''>
                    <div className='lg:flex gap-8 my-8 '>
                        <button className='btn p-12 flex justify-between gap-4 mx-auto'>
                            <Image src={logo1} alt='logo'></Image>
                            <h2 className='text-2xl font-semibold'>Tableu</h2>
                            <FiArrowRightCircle className='text-3xl border-0' />
                        </button>

                        <button className='btn p-12 flex justify-between gap-4'>
                            <LuChartNoAxesColumnIncreasing className='text-3xl font-extrabold text-yellow-500'></LuChartNoAxesColumnIncreasing>
                            <h2 className='text-2xl font-semibold'>Power Bi</h2>
                            <FiArrowRightCircle className='text-3xl border-0' />
                        </button>
                    </div>
                    <div className='lg:flex gap-12 my-8'>
                        <button className='btn p-12 flex justify-between gap-4'>
                            <SiLooker className='text-3xl  text-amber-400'></SiLooker>
                            <h2 className='text-2xl font-semibold'>Looker</h2>
                            <FiArrowRightCircle className='text-3xl border-0' />
                        </button>

                        <button className='btn p-12 flex justify-between gap-4'>
                            <FaSalesforce className='text-3xl  text-sky-500' />
                            <h2 className='text-2xl font-semibold'>Salesforce</h2>
                            <FiArrowRightCircle className='text-3xl border-0' />
                        </button>
                    </div>

                </div>

                <div>
                    <h2 className='text-6xl font-bold'>
                        Connect goals to data
                    </h2>

                    <p className='text-2xl font-semibold my-5
                    '>With hundreds of app integrations, Asana makes reporting easy.</p>

                    <p className='flex gap-4 text-xl font-semi-bold'>Explore reporting apps <FaRegArrowAltCircleRight className='text-3xl' /></p>
                </div>
            </div>

            <div className='divider'></div>



            <div className='bg-[#004232] text-white p-10 lg:flex gap-10 '>
                <div className='lg:w-1/2'>
                    <h2 className='text-5xl'>
                        Goal management templates
                    </h2>

                    <p className='mt-5 text-xl '>Standardize the goal-setting process with pre-made templates, so every team has a clear plan of action.</p>

                </div>
                <div className='lg:w-1/2'>
                    <div className=''>
                        <h2 className='text-3xl font-bold my-4'>Team goals planning template</h2>
                        <p className='text-3xl my-4'>See all the steps you need to draft goals, gather input, and put your objectives to the test.</p>

                        <p className='flex gap-4 text-xl font-semi-bold'>See Template <FaRegArrowAltCircleRight className='text-3xl' /></p>
                    </div>

                    <div className='divider'>

                    </div>

                    <div>
                        <h1 className='text-3xl font-bold'>Objectives and key results template</h1>
                        <p className='text-2xl semibold'>Help teams set effective OKRs with a step-by-step plan.</p>

                        <p className='flex gap-4 text-xl font-semi-bold'>See Template <FaRegArrowAltCircleRight className='text-3xl' /></p>
                    </div>
                </div>
            </div>


            <div className='divider'></div>

            <div className='lg:flex gap-10 my-10'>
                <div className='p-8 shadow rounded-2xl lg:w-1/2'>
                    <iframe width="560" height="315" className='rounded-lg' src="https://www.youtube.com/embed/hcY-2Xux2oI?si=2Tdsjood1YyqnN_f" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className='p-8'>
                    <h2 className='text-xl font-bold'>
                        Customer spotlight</h2>

                    <h1 className='text-4xl font-semibold'>
                        Palo Alto Networks reduces operating costs by 40% with Asana
                    </h1>

                    <h1 className='text-2xl font-semibold'>
                        See how Palo Alto Networks unifies work and accelerates teams with Asana, helping them deliver a best-in-class experience for their customers.


                    </h1>
                </div>
            </div>


            <div className='bg-[#FFEAEC]  p-10'>
                <h2 className='text-[#690031] text-5xl font-bold my-2'>
                    Fine tune your goals
                </h2>

                <h3 className='text-2xl font-semibold mb-12'>Get expert tips to improve goal-setting across your organization. </h3>


                <div className='grid lg:grid-cols-3'>
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <Image
                                src={card1}
                                alt="Shoes" />
                        </figure>
                        
                        <div className='pl-2'>
                        <button className='btn uppercase text-[#690031]'>Webiner</button>
                        </div>

                        <div className="card-body">
                           
                            <h2 className="card-title text-[#690031]">What are SMART goals?</h2>
                            
                            <p className='text-[#690031] text-xl'>Transform vague objectives into attainable goals with SMART goals framework</p>
                            
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <Image
                                src={card2}
                                alt="Shoes" />
                        </figure>

                        <div className='p-2'>
                        <button className='btn uppercase text-[#690031]'>report</button>
                        </div>
                        <div className="card-body">
                        <h2 className="card-title text-[#690031]">Planning To</h2>
                            <p className='text-[#690031] text-xl'>execution:</p>
                            <p className='text-[#690031] text-xl'>connecting goals to work</p>
                            <p className='text-[#690031] text-xl'>Learn how to align teams, improve your operational workflow, and enhance productivity</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <Image
                                src={card3}
                                alt="Shoes" />
                        </figure>
                        <div className='p-2'>
                        <button className='btn uppercase text-[#690031]'>ARTICLE</button>
                        </div>
                        <div className="card-body">
                        <h2 className="card-title text-[#690031]">The Anatomy of Work Global Index</h2>
                            
                            <p className='text-[#690031] text-xl'>Learn how goals can improve business outcomes , based on survey of 9615 knowledge workers</p>
                            
                        </div>
                    </div>

                </div>
            </div>


            <Footer></Footer>



        </div>
    );
};

export default Goal;