import React from 'react'
import onlineImg from '../images/Status-user-online.png'
import closeImg from '../images/close-icon.png'
import '../css/InfoBar.css'

function InfoBar({room}) {
    return (
        <div className="InfoBar">
            {/* <span> */}

            <div className="row" id="title-bar">
                <div className="col-sm-1">
                     <img src={onlineImg} className="online-icon"/>                    
                </div>
                <div className="col-sm-10">
                    <h3 className="room-name">{room}</h3>
                </div>
                <div className="col-sm-1">
                    <a href="/"><img src={closeImg} className="close-icon"/></a>
                </div>
            </div>
                {/* <div className="left-container">
                    <span>
                    <img src={onlineImg} className="online-icon"/>
                    <h3 className="room-name">{room}</h3> 
                    </span>
                               
                </div>
                
                <div className="right-container">
                    <a href="/"><img src={closeImg} className="close-icon"/></a>
                </div> */}
            {/* </span>  */}
         
        </div>
    )
}

export default InfoBar
