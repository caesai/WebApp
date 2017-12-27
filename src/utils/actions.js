export const actions = {
  openPopUp: (payload) => ({
    type: 'OPEN_POPUP',
    payload
  }),
  closePopUp: () => ({
    type: 'CLOSE_POPUP'
  }),
  throwPopUpError: (errmsg) => ({
    type: 'CATCH_POPUP_ERROR',
    err: errmsg
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
  }
};
