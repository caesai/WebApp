import React from 'react';
import ReactDOM from 'react-dom';

import './scss/base.scss';

export class WebApp extends React.Component{
  render() {
    return <div>Web App</div>
  }
}

ReactDOM.render(<WebApp ref={instance => {
  if (instance) {
    // do something
  }
}}/>, document.getElementById('webapp'), function() {
  console.log(this); // instance
});
