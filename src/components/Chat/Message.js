import React from 'react';

const Message = ({message}) => {
  return (
    <div className="message">
      <div className="username">
        <b>{message.username}</b> :
      </div>

      <div className="data">
        {message.message.type === 'message' ? (
          <div className="text">
              <p>{message.message.text}</p>
          </div>
        ) : (
          <div className="image">
              <img src={message.message.url} alt=""/>
          </div>
        )}
      </div>
    </div>
  )
}

export default Message
