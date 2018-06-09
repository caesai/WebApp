const initialState = {
  name: '',
  uid: null
}

export default function user (state=initialState, action) {
  switch (action.type) {
    case 'USER_AUTH':
      return Object.assign({}, state, {
        name: action.payload.name,
        uid: action.payload.uid
      });
    default:
      return state;
  }
}
