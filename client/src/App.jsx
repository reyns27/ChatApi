import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import RouterManager from './routes/Index.jsx';


const socket = io('/');

function App() {

  return (
    <RouterManager />
  )

}

export default App
