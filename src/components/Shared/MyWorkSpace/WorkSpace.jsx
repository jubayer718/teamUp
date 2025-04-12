import Link from 'next/link';
import { FaRegStar } from 'react-icons/fa6';

const WorkSpace = () => {
  return (
    <div>

      <nav className='w-full fixed z-30 top-[72px] bg-gray-900 py-4 px-8 space-y-6'>
        <div className='flex items-center  gap-4'>

          <span className=''><img className='h-14 w-14 rounded-full bg-white' src="s" alt="workspace" /></span>

          <h3 className='text-white font-bold text-3xl'>My workspaces</h3>
          <button className='cursor-pointer text-white text-lg'><FaRegStar /></button>
        </div>
        <div>
          <ul className='list-none flex items-center gap-6 font-semibold text-white'>
            <li><Link href={"/overview"}>Overview</Link></li>
            <li><Link href={"/allWork"}>All Work</Link></li>
            <li><Link href={"/message"}>Message</Link></li>
            <li><Link href={"/calender"}>Calender</Link></li>
            <li><Link href={"/knowledge"}>Knowledge</Link></li>
          </ul>
        </div>

      </nav>

    </div>
  );
};

export default WorkSpace;