import React from 'react';
import { connect } from 'react-redux';

import {actions} from 'utils/';

const mapStateToProps = (state) => ({
  popUpOpened: state.reducer.popUpOpened,
  popUpBody: {
    title: state.reducer.popUpBody.title,
    btns: state.reducer.popUpBody.btns,
    body: state.reducer.popUpBody.body
  }
});

let PopUp = class extends React.Component{
  render() {
    return(
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
    )
  }
}

export default connect(mapStateToProps)(PopUp);
