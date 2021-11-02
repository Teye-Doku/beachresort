import React from 'react'
import './Room.css';

const Room = ( {title,src,description}) =>{
    return (
        <div className="room">
        <div className="room__image">
            <img src={src} alt=""/>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
    )
}
export default Room;