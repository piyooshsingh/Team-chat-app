import React, { useEffect, useState } from "react";
import "./ChatRoom.css";

const ChatRoom = () => {
  const [messageList, setMessageList] = useState([
    {
      username: "User 1",
      avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp",
      createdAt: new Date(),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      sent: false,
    },
    {
      username: "User 2",
      avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp",
      createdAt: new Date(),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      sent: true,
    },
  ]);

  const sendMsg = () => {};

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
      <div className="col-md-4 col-lg-7 col-xl-8">
            <ul className="list-unstyled">
              {messageList.map((msg) => (
                <li className="d-flex justify-content-between mb-4">
                  <img
                    src={msg.avatar}
                    alt="avatar"
                    className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                    width={60}
                  />
                  <div className="card">
                    <div className="card-header d-flex justify-content-between p-3">
                      <p className="fw-bold mb-0">{msg.username}</p>
                      <p className="text-muted small mb-0">
                        <i className="far fa-clock" />{" "}
                        {new Date(msg.createdAt).toLocaleTimeString()}
                      </p>
                    </div>
                    <div className="card-body">
                      <p className="mb-0">{msg.text}</p>
                    </div>
                  </div>
                </li>
              ))}

              {/* <li className="d-flex justify-content-between mb-4">
              <div className="card w-100">
                <div className="card-header d-flex justify-content-between p-3">
                  <p className="fw-bold mb-0">Lara Croft</p>
                  <p className="text-muted small mb-0">
                    <i className="far fa-clock" /> 13 mins ago
                  </p>
                </div>
                <div className="card-body">
                  <p className="mb-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium.
                  </p>
                </div>
              </div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                alt="avatar"
                className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                width={60}
              />
            </li> */}

              <button
                type="button"
                className="btn btn-dark btn-rounded float-end"
              >
                Send
              </button>
            </ul>
          </div>
      </div>
    </section>
  );
};

export default ChatRoom;