import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {signInPopUp, newsLetterPopUp} from 'utils/';
import {actions} from '../../actions';

import Key from '../../components/Key';

const mapStateToProps = (state) => ({
  popUpOpened: state.popups.popUpOpened,
  location: state.routing
});

class TopBlock extends React.Component {
  render(){
    return(
      <div className='welcomeScreen'>
        <h1>NuLand</h1>
        <Key />
        <img src={require('img/logo.png')} alt='' />
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
