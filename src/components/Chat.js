import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io, { Socket } from 'socket.io-client';
import InfoBar from './InfoBar';
import Input from './Input';
import '../css/Chat.css';
import Messages from '../components/Messages'
import MessageBoxComp from '../components/MessageBoxComp'

let socket;
function Chat({location}) {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = "localhost:5000";

    useEffect(() => {
        const {name, room } = queryString.parse(location.search);

        socket=io(ENDPOINT);
        setName(name);
        setRoom(room);
        // console.log(socket);

        socket.emit('join', {name, room}, ()=> {

        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }

    },[ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message',(message)=> {
            // setMessages([...messages,message]);
            setMessages([...messages,message]);
        })
    },[messages]);

    //function for sending messages

    const sendMessage = (event) => {
        event.preventDefault();

        if(message){
            socket.emit('sendMessage', message, 
            () => setMessage(''));
        }
    } 

    // console.log(message, messages);
    // console.log(message);

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room}/>
                {/* <Messages messages={messages} name={name}/> */}
                <MessageBoxComp  messages={messages} name={name} />
              
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    )
}

export default Chat