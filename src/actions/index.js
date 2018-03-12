export const actions = {
  signUp: () => ({
    type: 'SIGN_UP'
  }),
  openPopUp: (payload) => ({
    type: 'OPEN_POPUP',
    payload
  }),
  closePopUp: () => ({
    type: 'CLOSE_POPUP'
  }),
  throwPopUpError: (payload) => ({
    type: 'CATCH_POPUP_ERROR',
    payload
  }),
  login(payload) {
    return (dispatch) => {
      dispatch({
        type: 'LOGIN_REQUEST',
        payload: {
          name: payload.name,
          nextUrl: '/profile'
        }
      })
    }
  },
  auth: (payload) => ({
    type: 'LOGIN_SUCCESS',
    payload
  }),
  logout: () => ({
    type: 'LOGOUT'
  })
};
