import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {signInPopUp, newsLetterPopUp} from 'utils/';
import {actions} from '../../actions';

import Key from '../../components/Key';
import ChatBox from '../../components/Chat/ChatBox';

const mapStateToProps = (state) => ({
  username: state.user.username,
  uid: state.user.uid,
  popUpOpened: state.popups.popUpOpened,
  location: state.routing
});

class TopBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      username: null
    }
  }
  onChange(e){
    this.setState({
      text : e.target.value
    })
  }
  onKeyUp(e){
    if (e.key === 'Enter') {
      this.setState({username : this.state.text});
    }
  }
  render(){
    return(
      <div className='welcomeScreen'>
        <h1>NuLand</h1>


        <img src={require('img/logo.png')} alt='' />
        <br/>
        {this.props.uid ? <ChatBox /> : null}
        {
          this.state.username ? <Key username={this.state.username} /> :
          <input
            style={{
              clear: 'both'
            }}
            type='text'
            placeholder='Enter your name'
            onKeyUp={this.onKeyUp.bind(this)}
            onChange={this.onChange.bind(this)}/>
        }

        <p>
          <button onClick={()=>{
            this.props.dispatch(actions.openPopUp(newsLetterPopUp));
          }}>Subscribe</button>
        </p>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps)(TopBlock));
