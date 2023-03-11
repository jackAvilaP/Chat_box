import React, { useEffect, useState } from "react";
import user from "../../assets/img/user.png";

//Mic start 



//import socket.io-client
import io from "socket.io-client";
import Mic from "./Mic";

//object return socket
const socket = io("http://localhost:4000");

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  let date = new Date();

  useEffect(() => {
    const receiveMessage = (message) => {
      console.log(message)
      setMessages([...messages, message]);
    };

    socket.on("message", receiveMessage);

    return () => {
      socket.off("message", receiveMessage);
    };
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let hour = date.toLocaleTimeString('en-CO', { hour: '2-digit', minute: '2-digit' });

    if (message) {
      // emit(name, value) for send
      const newMessage = {
        body: message,
        hour,
        from: "Me",
      };
      // socket.emit("message", message);
      socket.emit("message", newMessage);

      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  return (
    <section className="chat">
      <section className="navChat">
      
        <div className="flex items-center">
          <img
            src={user}
            alt=""
            className="w-14 h-14 object-cover rounded-full"
          />

          <div className="text-left ml-3">
            <h1 className="text-[#303030] text-xl font-bold">Anil</h1>
            <p>Online - Last seen, 2.02pm</p>
          </div>
        </div>

        <div className="flex justify-center items-center ml-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-[#9747FF]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mx-8 stroke-[#9747FF]"
          >
            <path
              strokeLinecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-[#9747FF]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>
        </div>
      </section>

      {/* Chat Conversation*/}
      <section className="h-full w-full p-4 my-2 flex flex-col bg-[rgb(239,246,252)] rounded-[25px] overflow-y-auto hover:overflow-y-scroll">
        {messages.map((message, i) => (
          <div key={i}>
            {
              message.from == "Me" ? (
                <div className="flex justify-end">
                  <p className="bg-[#6E00FF] text-right text-white rounded-[15px] px-2 py-1 mb-2">
                    {/* {message.from}: {message.body}{" "} */}
                    {message.body}
                    <p className="text-[10px] text-right ">{message.hour}</p>
                  </p>
                </div>
              ) : (
                <div className="flex justify-start">
                  <p className="bg-[#E7E7E7] text-[#303030] rounded-[15px] px-2 py-1 mb-2 flex flex-col">
                    {/* {message.from}: {message.body}{" "} */}
                    {message.data.body}
                    <p className="text-[10px]">{message.data.hour}</p>
                  </p>
                </div>
              )
            }

          </div>
        ))}
      </section>

      <form className="form" onSubmit={handleSubmit}>
        <div className="sendInput">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" ml-12 iconSend"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-2 iconSend"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg>
          <input
            type="text"
            placeholder="Type your message here... "
            className="inputForm"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>


        {/* <button
          className="ml-10 btn2"
        >
          {message ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="btn"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-9 h-9  stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
              />
            </svg>
          )}
        </button> */}
        <Mic message={message} setMessage={setMessage} />
      </form>
    </section>
  );
};

export default Chat;
