import React from 'react';
import '../css/message.css'
import ReactEmoji from 'react-emoji'

const Message = ({ message : { user, text }, name }) => {
    let isSentByCurrentUser = false;
    // console.log(name);
    // console.log(user);
    // console.log(text);

    const trimmedName = name.trim().toLowerCase();
    // console.log(trimmedName);

    if(user === trimmedName){
        isSentByCurrentUser =true;
    }

    return (
        isSentByCurrentUser
        ?
        (   
            <span id="chatmsg">
             
                <span id="chat_msg">
                    <h5>{trimmedName }</h5> : <p className="messageText">{ReactEmoji.emojify(text) }</p>    
                </span>  
            </span>
       
        )
        :
       (
        <div className="messageContainer justifyStart">  
        <span id="chat_msg">
        <h5>{user }</h5> : <p className="messageTextOthers">{ ReactEmoji.emojify(text)}</p>    
        </span>           
    
         </div>
       )
    )

}

export default Message
