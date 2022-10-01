import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Socket } from "socket.io-client";
import "./ChatRoom.css";

const ChatRoom = ({socket}) => {

  const [msgText, setMsgText] = useState("");

  const {roomName} = useParams();

  const [currentuser, setCurrentuser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const [messageList, setMessageList] = useState([
    // {
    //   username: "User 1",
    //   avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp",
    //   createdAt: new Date(),
    //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   sent: false,
    // },
    // {
    //   username: "User 2",
    //   avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp",
    //   createdAt: new Date(),
    //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   sent: true,
    // },
  ]);

  const joinRoom = () => {
    socket.emit('joinroom', roomName);
  }

  useEffect(() => {
    joinRoom();
  }, [])
  

  const sendMsg = () => {
    let obj = {
      username: currentuser.name,
      // avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp",
      createdAt: new Date(),
      text: msgText,
      room : roomName,
      sent: true,
    }
      socket.emit('sendmsg', obj);
      setMessageList([ ...messageList, obj ]);
  };

  socket.on('recmsg', (data) => {
    setMessageList([ ...messageList, data ]);
  })

  const displayTodoList = () => {
    return messageList.map((msg) => (
      <li className={"d-flex mb-4 "+(msg.sent ? 'flex-row-reverse' : '' )}>
        {/* <img
          src={msg.avatar}
          alt="avatar"
          className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
          width={60}
        /> */}
        <div className={"card "+(msg.sent?'' : 'bg-primary text-white')}>
          <div className="card-header d-flex justify-content-between p-3">
            <p className="fw-bold mb-0">{msg.username}</p>
            
          </div>
          <div className="card-body">
            <p className="mb-0">{msg.text}</p>
            <hr/>
            <p className="small mb-0">
              <i className="far fa-clock" />{" "}
              {new Date(msg.createdAt).toLocaleTimeString()}
            </p>
          </div>
        </div>
      </li>
    ))
}

  return (
    <section className="container-fluid" style={{ backgroundColor: "#eee" }}>
      <div className="container p-3">
      <div className="">
            <ul className="list-unstyled chat-area">
              
              {displayTodoList()}
              
              
            </ul>
            <textarea className="form-control mt-4" onChange={e => setMsgText(e.target.value)} rows={4}></textarea>
              <button
                type="button"
                className="btn btn-dark btn-rounded float-end mt-3"
                onClick={sendMsg}
              > 
                Send
              </button>
          </div>
      </div>
    </section>
  );
};

export default ChatRoom;