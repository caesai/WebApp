const reducerState = {
  loggedIn: false,
  popUpOpened: false
}

export default function reducer (state = reducerState, action) {
  switch (action.type) {
      case 'OPEN_POPUP':
      return Object.assign({}, state, {
        popUpOpened: true
      });
      case 'CLOSE_POPUP':
      return Object.assign({}, state, {
        popUpOpened: false
      });
      default:
      return state;
  }
}
