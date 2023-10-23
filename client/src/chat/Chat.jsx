import { useEffect, useState } from 'react';
import io from 'socket.io-client';


const socket = io('/');

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      body: message,
      from: 'Me'
    }
    setMessages([...messages, newMessage]);
    socket.emit('message', message);
  };

  useEffect(() => {
    socket.on('message', receiveMessage)

    return () => {
      socket.off('message')
    }
  }, []);

  const receiveMessage = (message) => setMessages((state) => [...state, message]);
  return (
    <div className='h-screen bg-zinc-800 text-white flex items-center justify-center'>
      <form onSubmit={handleSubmit} className='bg-zinc-900 p-10'>
        <input type='text' placeholder='Escribir nuevo mensaje'
          onChange={(e) => setMessage(e.target.value)}
          className='border-2 border-zinc-500 w-full text-black'
        />
        <h1 className='text-2xl font-bold my-2'>Chat App</h1>
        <button>
          Enviar
        </button>
        <ul>
          {
            messages.map((message, i) => (
              <li key={i}
                className={`my-2 p-2 table text-sm rounded-md 
              ${message.from == 'Me' ? "bg-sky-700 ml-auto" : `bg-black`}`}>
                <span className='text-xs text-slate-400 block'>
                  {message.from}:
                </span>
                <span className='text-sm'>
                  {message.body}
                </span>
              </li>
            ))
          }
        </ul>
      </form>
    </div>
  )
}

export default Chat
