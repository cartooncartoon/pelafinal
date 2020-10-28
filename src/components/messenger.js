import React, { useState, useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import Body from "./body";
import queryString from 'query-string';
import Messagebar from './messagebar';
import io from 'socket.io-client'

let socket;
const ENDPOINT = 'http://localhost:5000';


const Messenger = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  socket = io(ENDPOINT);

  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }
  return (
    <div className="messenger">
      {/*Header */}
      <Header />
      <Body messages={messages} name={name} />
      <Messagebar message={message} setMessage={setMessage} sendMessage={sendMessage}/>
      {}
    </div>
  );
};


export default Messenger;
