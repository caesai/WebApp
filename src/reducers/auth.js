const initialState = {
  isAuthenticating: false,
  isAuthenticated: false,
  token: '',
  name: '',
  redirectingTo: ''
};

export default function user (state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
    return Object.assign({}, state, {
      isAuthenticating: true,
      name: action.payload.name,
      redirectingTo: action.payload.nextUrl
    });
    case 'LOGIN_SUCCESS':
    localStorage.setItem('token', action.payload.token);
    return Object.assign({}, state, {
      isAuthenticating: false,
      name: action.payload.name,
      isAuthenticated: action.payload.isAuthenticated,
      token: action.payload.token
    });
    case 'LOGOUT':
    localStorage.removeItem('token');
    return initialState;
    default:
    return state;
  }
}
