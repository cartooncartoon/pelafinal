import React from "react";
import "./body.css";
import Messages from "./messagelist";

const Body = ({ messages, name }) => {
  console.log(messages);
  return (
    <div className="body scrollable scrollbar">
      <div className="content scrollable">
        <Messages messages={messages} name={name} />
      </div>
    </div>
  );
};

export default Body;
