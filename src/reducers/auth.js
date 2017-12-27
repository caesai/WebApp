const initialState = {
  isAuthenticating: false,
  isAuthenticated: false,
  name: '',
  redirectingTo: ''
};

export default function authState (state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
    return Object.assign({}, state, {
      isAuthenticating: true,
      name: action.payload.name,
      redirectingTo: action.payload.nextUrl
    });
    case 'LOGIN_SUCCESS':
    return Object.assign({}, state, {
      name: action.payload.name,
      isAuthenticated: action.payload.isAuthenticated
    });
    default:
    return state;
  }
}
