import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  popUpOpened: state.reducer.popUpOpened
});

const actions = {
  closePopUp: () => ({
    type: 'CLOSE_POPUP'
  })
}

let PopUp = class extends React.Component{
  render() {
    return(
      <div className='popUp'>
        <div className='popUpCls' onClick={(e)=>{
          this.props.dispatch(actions.closePopUp());
        }}>
          x
        </div>
        <div className='popUpHead'>
          <h3>PopUp HeadLine</h3>
        </div>
        <div className='popUpBody'>
          Please <Link to='/profile'>sign in</Link>
        </div>
      </div>
    )
  }
}

PopUp = connect(mapStateToProps)(PopUp);

export default PopUp;
