"use client";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import useAxiosPublic from "../../useAxiosPublic";
import { useUser } from "../../../context/UserContext";

const socket = io("http://localhost:5000"); // Connect to the backend

const ChatMessage = () => {
  const axiosPublic = useAxiosPublic();
  const {user}=useUser()

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Fetch previous messages from MongoDB when component mounts
  useEffect(() => {
     socket.emit("joinChat"); // Request previous messages

    socket.on("previousMessages", (chatHistory) => {
      setMessages(chatHistory); // Load messages from MongoDB
    });


       socket.on("receiveMessage", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]); // Update real-time
    });

    return () => {
      socket.off("previousMessages");
      socket.off("receiveMessage");
    };
  }, []);

  // ✅ Send message function
  const sendMessage = async () => {
    if (message.trim() !== "") {
      const newMessage = {
        sender: user.displayName, // done: Replace with actual user info
        message: message,
        timestamp: new Date().toISOString(),
      };

        try {
          const response = await axiosPublic.post("/messages", newMessage);
        if (response.status === 200) {
          socket.emit("sendMessage", newMessage); // Emit message in real-time
          setMessage(""); // Clear input
        }
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <div className="p-4  bg-gray-100 min-h-screen">
      <h1 className="text-xl font-bold mb-4">Real-Time Chat</h1>

      {/* ✅ Message Display Area */}
      <div className="bg-white p-4 rounded shadow h-96 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 my-1 rounded ${
              msg.sender === "User" ? "bg-blue-200 text-right" : "bg-gray-200"
            }`}
          >
            <strong>{msg.sender}:</strong> {msg.message}
            <br />
            <small className="text-gray-500">{new Date(msg.timestamp).toLocaleTimeString()}</small>
          </div>
        ))}
      </div>

      {/* ✅ Input & Send Button */}
      <div className="mt-4 flex">
        <input
          className="flex-1 p-2 border rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatMessage;
