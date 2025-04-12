'use client'
import React, { useState } from 'react';

const InputText = ({ addMessage }) => {
  
  const [message, setMessage] = useState();
  // console.log({message});

  const sendMessage = () => {
    addMessage({message});
    setMessage("")

  }

  return (
    <div className='flex items-center justify-center gap-6 mt-6'>
      <textarea onChange={(e)=>setMessage(e.target.value)} value={message} className='w-4/6  text-[18px]  rounded-2xl p-1 bg-white' placeholder='Type something...' name="" id="" ></textarea>
      <button onClick={sendMessage}  disabled={!message} className='btn btn-accent'>Send</button>
    </div>
  );
};

export default InputText;