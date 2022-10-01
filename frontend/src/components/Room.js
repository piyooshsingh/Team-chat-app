import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Room = () => {

    const [roomName, setRoomName] = useState("");

  return (
    <div>

        <input className='form-control' onChange={e => setRoomName(e.target.value)} />
        <Link to={"/chatroom/"+roomName}>Enter Room</Link>
    </div>
  )
}

export default Room