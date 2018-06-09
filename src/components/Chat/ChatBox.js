import React from 'react';
import socketIOClient from 'socket.io-client';
import { connect } from 'react-redux';
import {toByteArray} from '../../utils/';
import socketUrl from '../../constants/';

import Messages from './Messages';

const secp256k1 = require('secp256k1');
const sha3_256 = require('js-sha3').sha3_256;

class ChatBox extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: this.props.username,
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
    this.socket = socketIOClient(socketUrl, {
      query : 'username='+this.state.username+'&uid='+this.state.uid
    });
  }
  sendMessage(message, e){
    console.log(message);
    let hashText = sha3_256(message.text);
    let msgBuf = toByteArray(hashText);
    this.setState({
      messages : this.state.messages.concat([{
       username : this.state.username,
       uid : this.props.uid,
       message : message,
     }])
    });
    this.socket.emit('message', {
      username : this.props.username,
      uid : this.props.uid,
      message : message,
      signature: secp256k1.sign(msgBuf, this.props.keyBuf)
    });
  }
  componentDidMount() {
    this.initChat()
  }
  render() {
    return(
      <div>
        <Messages sendMessage={this.sendMessage.bind(this)} messages={this.state.messages} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  username: state.user.name,
  uid: state.user.uid,
  keyBuf: state.user.keyBuf
});

export default connect(mapStateToProps)(ChatBox)
