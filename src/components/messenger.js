import React, { useState, useEffect } from "react";
import Header from "./header";
import Body from "./body";
import Messagebar from './messagebar';
import firebase from 'firebase/app';
import { firestore, db } from '../firebase/firebase';




const Messenger = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);
  
  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMessages([...messages, { message: message }]);
    setMessage("");
  };

console.log(setMessage);

  return (
    <div className="messenger">
      {/*Header */}
      <Header /> 
      <Body
        messages = {messages} />
      <Messagebar 
      setMessage={setMessage} 
      sendMessage={sendMessage} />
    </div>
  );
};


export default Messenger;
