import React from 'react';
import {connect} from 'react-redux';

import {actions, signInPopUp} from 'utils/';

const mapStateToProps = (state) => ({
  popUpOpened: state.reducer.popUpOpened
})

const TopBlock = (props) => {
  return(
    <div>
      <h1>WebApp</h1>
      <p><b>WebApp</b> is a React based JavaScript application with main landing page consisting info about some product and
      user profile page</p>
      <p>Application provides authorization through OAuth2 or back-end authorization on server side</p>
      <button onClick={()=>{
        props.dispatch(actions.openPopUp(signInPopUp));
      }}>Sign in</button>
    </div>
  )
}

export default connect(mapStateToProps)(TopBlock);
