import React from 'react'

function Input({ message, setMessage, sendMessage }) {
    return (
        <div>
            <div className="form-group input-group-append" >
                 <input type="text" className="form-control" 
                 placeholder="Type your message here.." id="chatmsg"
                 value={message}
                 onChange={(event) => setMessage(event.target.value)}
                 onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : ''}
                 />
                 <button type="submit" className="btn btn-success"
                 onClick={(event) => sendMessage(event)}
                 >Send</button>
            </div>
        </div>
    )
}

export default Input
