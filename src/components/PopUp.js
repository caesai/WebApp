import React from 'react';
import { connect } from 'react-redux';

import {actions} from 'utils/actions';

const mapStateToProps = (state) => ({
  popUpOpened: state.popups.popUpOpened,
  popUpBody: {
    title: state.popups.popUpBody.title,
    btns: state.popups.popUpBody.btns,
    body: state.popups.popUpBody.body
  }
});

let PopUp = class extends React.Component{
  render() {
    return(
      <div className='blackbg' onClick={(e) => {
        if (e.target === e.currentTarget) {
          this.props.dispatch(actions.closePopUp());
        }
      }}>
        <div className='popUp'>
          <div className='popUpCls' onClick={()=>{
            this.props.dispatch(actions.closePopUp());
          }}>
            x
          </div>
          <div className='popUpHead'>
            <h3>{this.props.popUpBody.title && this.props.popUpBody.title}</h3>
            {this.props.popUpBody.btns ? <this.props.popUpBody.btns /> : null}
          </div>
          <div className='popUpBody'>
            <this.props.popUpBody.body />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(PopUp);
