import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../components/Message';
import '../css/messages.css'

const Messages = ({ messages, name }) => (
    
     <div id="msgContainer">
          
         <ScrollToBottom className="messages" >
            {messages.map((message, i) => 
            <div key={i}>
                <Message message={message} name={name} />
            </div>)}
        </ScrollToBottom>
    </div>   
)

export default Messages
