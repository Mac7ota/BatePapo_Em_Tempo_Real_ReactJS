import React, {useRef} from 'react'
import io from 'socket.io-client'
import './Join.css'

export default function Join({ setChatVisibility, setSocket}) {

    const inputRef = useRef()

    const handleSubmit = async () => {
        const username = inputRef.current.value
        if(!username.trim()) return
        const socket = await io('http://localhost:7228')
        socket.emit('set_username', username)
        setSocket(socket)
        setChatVisibility(true)
    }

    return (
        <div className='Container'>
            <h1>Bem Vindo !</h1>
            <div className='minContainer'>
            <input type='text' ref={inputRef} placeholder='Nome de usuário'/>
            <button onClick={()=>handleSubmit()}>Entrar</button>
            </div>
            </div>
    )
}