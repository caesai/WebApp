const initialState = {
  name: '',
  uid: null,
  key: null,
  keyBuf: null
}

export default function user (state=initialState, action) {
  switch (action.type) {
    case 'USER_AUTH':
      return Object.assign({}, state, {
        name: action.payload.name,
        uid: action.payload.uid,
        key: action.payload.key,
        keyBuf: action.payload.keyBuf
      });
    default:
      return state;
  }
}
