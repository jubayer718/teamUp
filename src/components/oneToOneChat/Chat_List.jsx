'use client'
import { useUser } from '../../context/UserContext';

const Chat_List = ({chats}) => {
 
  const { user } = useUser();

  const ChatSender=({message,avatar,username}) => {
    return (
      <div className='flex justify-end flex-row mt-1'>
        <img className='h-8 w-8 rounded-full' src={avatar} alt="SenderAvatar" />
        <p className='mx-w-[60%] bg-white p-3 rounded-2xl'>
          <strong>{username}</strong> <br />{message}
        </p>
      </div>
    )
  }

  const ChatReceiver = ({message,avatar,username}) => {
    return (
      <div className='flex justify-start  flex-row mt-1'>
        <img className='h-8 w-8 rounded-full' src={avatar} alt="ReceiverAvatar" />
        <p  className='mx-w-[60%] bg-[#aff6be] p-3 rounded-2xl'>
          <strong>{ username}</strong> <br />{message}
        </p>
      </div>
    )
  }
  return (
    <div className='h-[75vh] overflow-x-hidden overflow-y-scroll'>
      {
        chats.map((chat, index) => {
          if (chat.user?.uid === user?.uid) {
            // console.log('chat user',chat.user,'user',user);
            return <ChatSender
              key={index}
              message={chat?.message}
              avatar={chat?.user?.photoURL}
              username={chat?.user?.displayName}
            />
          } 
              return <ChatReceiver
              key={index}
             message={chat?.message}
              avatar={chat?.avatar}
              username={chat?.user?.displayName}
            />
          
         

        })
      }
     

    </div>
  );
};

export default Chat_List;