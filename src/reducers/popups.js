const reducerState = {
  loggedIn: false,
  popUpOpened: false,
  popUpBody: {
    title: '',
    body: ''
  },
  err: ''
}

export default function popups (state = reducerState, action) {
  switch (action.type) {
    case 'OPEN_POPUP':
    return Object.assign({}, state, {
      popUpOpened: true,
      popUpBody: action.payload
    });
    case 'CLOSE_POPUP':
    return Object.assign({}, state, {
      popUpOpened: false,
      popUpBody: {},
      err: ''
    });
    case 'CATCH_POPUP_ERROR':
    return Object.assign({}, state, {
        err: action.err
    });
    default:
    return state;
  }
}
