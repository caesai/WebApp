import React from 'react';
import socketIOClient from 'socket.io-client';
import { connect } from 'react-redux';

class ChatBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: 'sushka',
      uid: this.props.uid,
      chat_ready: false,
      users: [],
      messages: [],
      message: ''
    }
  }
  initChat() {
    this.setState({
      chat_ready: true
    });
    // io.connect('http://localhost:3000');
    this.socket = socketIOClient('ws://localhost:3000', {
      query : 'username='+this.state.username+'&uid='+this.state.uid
    });
  }
  componentDidMount() {
    this.initChat()
  }
  render() {
    return(
      <div>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  username: state.user.name,
  uid: state.user.uid
});

export default connect(mapStateToProps)(ChatBox)
