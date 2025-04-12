'use client'
import React, { use, useContext, useEffect, useState } from 'react';
import Chat_List from './Chat_List';
import InputText from './InputText';
import { useUser } from '../../context/UserContext'
import LoginForm from '../HookForm/loginForm'
import { useRouter } from 'next/navigation';
import socketIOClient from 'socket.io-client'
import useAxiosPublic from '../useAxiosPublic';



const Chat_Container = () => {
  const { user, loading } = useUser();
  console.log(user);
  if (loading) {
    return <p>Loading...</p>;
  }

  const axiosPublic = useAxiosPublic();  
  const socketIo = socketIOClient("http://localhost:5000");
  const router = useRouter();
  const [chats, setChats] = useState([])


  const sendToSocket = (chat) => {
    socketIo.emit("chat", chat)

  }

  
  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
  }, [user, router])

  useEffect(() => {
    socketIo.on("chat", (chats) => {
      setChats(chats)
    })
  })

  

  const addMessage = async (chat) => {
   
    const newChat = { ...chat, user: user, avatar: user?.photoURL };
    // console.log([...chats,newChat]);
    setChats([...chats, newChat]);
    sendToSocket([...chats, newChat]);

    //store messages to database
    const chatVault = {
      user: user,
      message: chat.message,
      timestamp: new Date().toISOString(),
    }
    try {
      const { data } = await axiosPublic.post('/chats', chatVault);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  

  useEffect(() => {
    const faceChats = async () => {
    try {

      const response = await axiosPublic.get(`/allChats`);
      setChats(response.data)

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    }
    faceChats();
},[])

  return (

    <div className='bg-[#ece5dd] max-h-full p-6'>
      <div>
        <h4>UserName:{user?.displayName}</h4>
      </div>
      <div>

        <Chat_List chats={chats} />
        <InputText addMessage={addMessage} />
      </div>
    </div>

  );
};

export default Chat_Container;