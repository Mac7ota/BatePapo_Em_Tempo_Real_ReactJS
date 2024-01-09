import React , {useRef,useState,useEffect} from 'react'
import './Chat.css'

export default function Chat({socket}) {
    const messageRef = useRef()
    const [messageList, setMessageList] = useState([])

    useEffect(() => {
        socket.on('receive_message', data => {
            setMessageList((current)=>[...current, data])
        })

        return () => socket.off('receive_message')
    }),[socket]

    const handleSubmit = () => {
        const message = messageRef.current.value
        if(!message.trim()) return
        socket.emit('message', message)
        clearInput()
    }

    const clearInput = () => {      
        messageRef.current.value = ''
    }

    return (
        <div className='Container'>
            <h1>Bate-papo</h1>
            {
                messageList.map((message, index) => (
                    <p className='namebalon' key={index}>{message.author}:{message.text}</p>
                ))            
            }
            <div className='minContainer'>
            <input type='text' ref={messageRef} placeholder='Mensagem'/>
            <button onClick={()=>handleSubmit()}>Enviar</button>
            </div>
            </div>
    )
}