import Image from 'next/image';
import loginPic from './../../app/assets/image/login.jpg'
import workSpace from './../../app/assets/image/workspaces.png'
import collaborationPic from './../../app/assets/image/collaboration.jpg'
const Work = () => {
  return (
    <div className='bg-[#690031]'>
       <section className="container mx-auto px-8 md:px-16 lg:px-24 py-20  text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-white">How It Works</h2>
  <p className="mt-3 text-lg text-gray-300">Get started in just 3 easy steps!</p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
    {/* Step 1 */}
    <div className="p-6 bg-white shadow-lg rounded-lg">
          <div className='flex items-center justify-center'>
               <Image src={ loginPic} width={80} height={80} alt="Signup" />
       </div>
      <h3 className="text-xl font-semibold mt-4">1. Sign Up</h3>
      <p className="text-gray-600 mt-2">Create your account in seconds.</p>
    </div>

    {/* Step 2 */}
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <div className='flex items-center justify-center'>
               <Image src={ workSpace} width={80} height={80} alt="Signup" />
       </div>
      <h3 className="text-xl font-semibold mt-4">2. Set Up Workspace</h3>
      <p className="text-gray-600 mt-2">Invite team members & organize tasks.</p>
    </div>

    {/* Step 3 */}
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <div className='flex items-center justify-center'>
               <Image className='rounded-full' src={ collaborationPic} width={80} height={80} alt="Signup" />
       </div>
      <h3 className="text-xl font-semibold mt-4">3. Start Collaborating</h3>
      <p className="text-gray-600 mt-2">Work together in real time.</p>
    </div>
  </div>
</section>
  </div>

  );
};

export default Work;