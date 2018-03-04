const initialState = {
  wasm: ''
}
export default function wasm (state = initialState, action) {
  switch (action.type) {
    case 'LOAD_WASM':
    return Object.assign({}, state, {
      wasm: action.payload
    });
    default:
    return state;
  }
}
