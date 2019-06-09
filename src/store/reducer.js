import initialState from './initialState'

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_VAR':
      console.log('paso por el reducer', action.var)
        return {
          ...state,
          var: action.var
        };
      case 'SET_RESTRICTIONS':
      console.log('paso por el reducer', action.restrictions)
        return {
          ...state,
          restrictions: action.restrictions
        };
      default:
        return state;
    }
  }
   
  export default reducer;