const reducerState = {
  loggedIn: false,
  popUpOpened: false,
  popUpBody: {
    title: '',
    body: ''
  }
}

export default function reducer (state = reducerState, action) {
  switch (action.type) {
      case 'OPEN_POPUP':
      return Object.assign({}, state, {
        popUpOpened: true,
        popUpBody: action.payload
      });
      case 'CLOSE_POPUP':
      return Object.assign({}, state, {
        popUpOpened: false
      });
      default:
      return state;
  }
}
