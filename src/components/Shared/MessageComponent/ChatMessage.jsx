
'use client'
import { useState } from 'react';
import toast from 'react-hot-toast';
import {v4 as uuid} from 'uuid'

const ChatMessage = () => {

  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");


  const generateRoomId = (e) => {
    e.preventDefault();
    const id = uuid();
    setRoomId(id)
    toast.success('generate roomId successfully')
  }
  
  
  return (
   <div className="flex items-center justify-center  min-h-screen bg-gray-900 ">
  <div className="bg-gray-800 border-5 border-gray-700 rounded-xl px-12 py-5 my-4 shadow-lg">
    <div className="flex flex-col items-center space-x-4">

     
    
      
          <div className=" flex gap-1 items-center mb-10">
        <div className="h-12 w-px bg-gray-600"></div>
            <h2 className="text-white text-4xl font-semibold tracking-wide"> CODECAST  </h2> </div>
          
          <h3 className="text-white text-center font-semibold mb-2 text-3xl">Enter The Room ID</h3>
          <form className="space-y-3" action="">
            <div>
               <label htmlFor="roomId" className="my-2 text-white "> Enter Your Room ID : </label>
            <input id="roomId" type="text" name="roomId" placeholder="Enter your room ID " value={roomId} onChange={(e)=>setRoomId(e.target.value)} className="input w-full" />
            </div>
            <div>
              <label htmlFor="roomId" className="my-2 text-white "> Enter Your username : </label>
            <input id="username" type="text" name="username" placeholder="Enter your user name " className="input w-full" />
            </div>
            <div className="flex items-center justify-center my-2">
              <button type="btn" className="btn btn-accent">Join</button>
            </div>
          </form>
          <p className="text-white mt-2">Don't have a room ID ?
            <button
            onClick={generateRoomId}
              className=" cursor-pointer text-blue-400 hover:text-blue-500 font-semibold">
              New Room</button>
          </p>

    </div>
  </div>
</div>

  );
}
export default ChatMessage;