'use client'
import React, { useState } from 'react';
import Client from '../../../../components/Shared/Client/Client';
import Editor from '../../../../components/Shared/Editor/Editor';


const RoomChat = () => {

  const [code, setCode]=useState('')

  const [clients, setClients] = useState([
    { socketId: 1, username: 'jubayer' },
    {socketId: 2, username: 'Ahmed'}
  ])

  return (
    <div className='grid grid-cols-12 min-h-screen mt-16'>
      <div className='col-span-2 text-white bg-gray-700 p-2 '>
        
        hello Sidebar
        <hr className='mt-3  border-gray-800 shadow-2xl' />
        
        <div className='overflow-y-scroll'>
          {
            clients.map((client) => {
              return (
                <Client
                  key={client.socketId}
                  username={client.username}
                
                />
              )
            })
        }
        </div>

        <div className='flex flex-col gap-2 mt-64'>
       <hr className='mb-2  border-gray-800 shadow-2xl' />
          <button className='btn bg-green-600 hover:bg-green-700'>Copy RoomId</button>
          <button className='btn btn-error'>Leave Room</button>
        </div>
      </div>

      <div className='col-span-10 text-white bg-gray-600 p-3'>

        <Editor ></Editor>

      </div>
    </div>
  );
};

export default RoomChat;