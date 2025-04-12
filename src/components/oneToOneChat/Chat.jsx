"use client";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import useAxiosPublic from "../../components/useAxiosPublic"

const socket = io("http://localhost:5000"); // Connect to the backend


const Chat = () => {

  const axiosPublic = useAxiosPublic();
  
  return (
    <div className="">
     <h2>chat</h2>
    </div>
  );
};

export default Chat;