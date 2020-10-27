import React, { useState } from "react";
import "./messagebar.css";
import io from "socket.io-client";
import SendIcon from "@material-ui/icons/Send";

const Messagebar = ({setMessage, sendMessage, message}) => {
  console.log(message);
  console.log(setMessage);

  return (
    <div className='bar-wrapper'>
    <div className="bar">
      <input
        className="searchbar"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
      />
      <SendIcon onClick={sendMessage} className="send" />
    </div>
    </div>
  );
};

export default Messagebar;
