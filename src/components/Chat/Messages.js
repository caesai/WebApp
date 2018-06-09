import React from 'react';
import Message from './Message';
import ChatInput from './ChatInput';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: props.messages,

    }
  }
  static getDerivedStateFromProps(nextProps, prevState){
    return  {
      messages : nextProps.messages,
    }
  }
  componentDidUpdate() {
    console.log(this.props.messages)
  }
  render() {
    return(
      <div>
        <div>
          {
            this.props.messages.length ? (
              this.props.messages.map((message, i) => {
                return <Message key={i} message={message}/>
              })
            ) : <div className="no-message">No messages in chat room</div>
          }
        </div>
        <div>
          <ChatInput sendMessage={this.props.sendMessage}/>
        </div>
      </div>
    )
  }
}

export default Messages
