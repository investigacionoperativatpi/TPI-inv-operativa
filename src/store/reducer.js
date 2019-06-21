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
      case 'SHOW_ORNOT_OBJ_FUNCTION':
      console.log('paso por el reducer en el que pone para mostrar o no lo de la funcion objetivo')
        return {
          ...state,
          ObjFunction:{
            ...state.ObjFunction,
            show: !state.ObjFunction.show
          }

        };
      default:
        return state;
    }
  }
   
  export default reducer;