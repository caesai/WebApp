const initialState = {
  isAuthenticating: false,
  isAuthenticated: false,
  token: '',
  isadmin: false,
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
    localStorage.setItem('geoglobula.auth.token', JSON.stringify(action.payload));
      return Object.assign({}, state, {
        isAuthenticating: false,
        isadmin: action.payload.admin,
        name: action.payload.username,
        isAuthenticated: true,
        token: action.payload.token
      });
    case 'CHECK_TOKEN':
      return Object.assign({}, state, {
        isAuthenticating: true
      });
    case 'LOGOUT':
    localStorage.removeItem('geoglobula.auth.token');
      return initialState;
    default:
      return state;
  }
}
