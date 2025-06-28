// "use client";
// import { useState, useEffect } from "react";
// import { io } from "socket.io-client";
// import useAxiosPublic from "../../useAxiosPublic";
// import { useUser } from "../../../context/UserContext";

// const socket = io("http://localhost:5000/"); // Connect to the backend

// const ChatMessage = () => {
//   const axiosPublic = useAxiosPublic();
//   const {user}=useUser()

//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
  

//   // Fetch previous messages from MongoDB when component mounts
//   useEffect(() => {
//      socket.emit("joinChat"); // Request previous messages

//     socket.on("previousMessages", (chatHistory) => {
//       setMessages(chatHistory); // Load messages from MongoDB
//     });


//        socket.on("receiveMessage", (newMessage) => {
//       setMessages((prevMessages) => [...prevMessages, newMessage]); // Update real-time
//     });
    
//     return () => {
//       socket.off("previousMessages");
//       socket.off("receiveMessage");
//     };
//   }, []);

//   // ✅ Send message function
//   const sendMessage = async () => {
//     if (message.trim() !== "") {
//       const newMessage = {
//         sender: user.displayName, // done: Replace with actual user info
//         message: message,
//         timestamp: new Date().toISOString(),
//       };

//         try {
//           const response = await axiosPublic.post("/messages", newMessage);
//         if (response.status === 200) {
//           socket.emit("sendMessage", newMessage); // Emit message in real-time
//           setMessage(""); // Clear input
//         }
//       } catch (error) {
//         console.error("Error sending message:", error);
//       }
//     }
//   };

//   return (
//     <div className="p-4  bg-gray-100 min-h-screen">
//       <h1 className="text-xl font-bold mb-4">Real-Time Chat</h1>

//       {/* ✅ Message Display Area */}
//       <div className="bg-white p-4 rounded shadow h-96 overflow-y-auto">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`p-2 my-1 rounded ${
//               msg.sender === "User" ? "bg-blue-200 text-right" : "bg-gray-200"
//             }`}
//           >
//             <strong>{msg.sender}:</strong> {msg.message}
//             <br />
//             <small className="text-gray-500">{new Date(msg.timestamp).toLocaleTimeString()}</small>
//           </div>
//         ))}
//       </div>

//       {/* ✅ Input & Send Button */}
//       <div className="mt-4 flex">
//         <input
//           className="flex-1 p-2 border rounded"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Type a message..."
//         />
//         <button
//           className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
//           onClick={sendMessage}
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatMessage;


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