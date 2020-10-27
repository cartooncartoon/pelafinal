import React from 'react';
import moment from 'moment';

import './message.css';

const Message = ({ data, startsSequence, isMine, endsSequence, showTimestamp, timestamp }) => {


 
  const friendlyTimestamp = moment(timestamp).format("LLLL");
  console.log(startsSequence);
  return (
   
    <div
    className={[
      "message",
      `${isMine ? "mine" : ""}`,
      `${startsSequence ? "start" : ""}`,
      `${endsSequence ? "end" : ""}`
    ].join(" ")}
  >

{showTimestamp && <div className="timestamp">{friendlyTimestamp}</div>}

    <div className="bubble-container">
      <div className="bubble">
        {data.text}
      </div>
    </div>
  </div>
        );
  
}


export default Message;
