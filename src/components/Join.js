import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Join.css'

function Join() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');


    return (
        <div className="form-group" id="login-form">
            <h1 className="headeing-join" id="header-top">Join to Chat</h1>
            <div>
                <label for="name">Your Name :</label>
                <input placeholder="Name" className="form-control" 
                type="text" onChange={(event) => setName(event.target.value)}
                />
                <label for="name">Chat Room :</label>
                 <input placeholder="Room" className="form-control" 
                type="text" onChange={(event) => setRoom(event.target.value)}
                />

                <Link onClick={event => (!name || !room) ? event.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
                    <button class="btn btn-primary" id="login-btn" type="submit">Sign In</button>
                </Link>

            </div>
        </div>
    )
}

export default Join
