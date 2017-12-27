import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {signInPopUp, newsLetterPopUp} from 'utils/';
import {actions} from 'utils/actions';

const mapStateToProps = (state) => ({
  popUpOpened: state.popups.popUpOpened,
  location: state.routing
});

class TopBlock extends React.Component {
  render(){
    return(
      <div>
        <h1>WebApp</h1>
        <p><b>WebApp</b> is a React based JavaScript application with main landing page consisting info about some product and
        user profile page</p>
        <p>Application provides authorization through OAuth2 or back-end authorization on server side</p>
        <button onClick={()=>{
          this.props.dispatch(actions.openPopUp(signInPopUp));
        }}>Sign in</button>
        <p>Fill admin admin in sign in pop up window and you will get to the profile page</p>
        <p>Also user can subscribe to newsletter</p>
        <button onClick={()=>{
          this.props.dispatch(actions.openPopUp(newsLetterPopUp));
        }}>Subscribe</button>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps)(TopBlock));
