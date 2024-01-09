import { useState } from 'react'
import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'
import './App.css'

function App() {
const [chatVisibility, setChatVisibility] = useState(false)
const [socket, setSocket] = useState(null)
  return (
    <>
      <div>
        {
          chatVisibility ? <Chat socket={socket} />: <Join setSocket={setSocket} setChatVisibility={setChatVisibility} />
        }
      </div>      
    </>
  )
}

export default App
