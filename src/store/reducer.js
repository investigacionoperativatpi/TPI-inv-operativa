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
        case 'SET_OBJ_FUNCTION':
          console.log('paso por el reducer en el SET_OBJ_FUNCTION', action)
            return {
              ...state,
              ObjFunction:{
                ...state.ObjFunction,
                objective : action.obj.objective,
                optimizationType: action.obj.optimizationType 
              }
    
            };
        case 'SET_RESTRICTIONS_VALUES':
          console.log('paso por el reducer en el SET_RESTRICTIONS_VALUES', action)
            return {
              ...state,
              restrictionsArr:{
                ...state.restrictionsArr,
                  restrictions: action.value,
                  solve: true   
              }
            };
        case 'SHOW_ORNOT_RESTRICTIONS':
          console.log('paso por el reducer cosa de mostrar las restrictions')
            return {
              ...state,
              restrictionsArr:{
                ...state.restrictionsArr,
                show: !state.restrictionsArr.show
              }

            };
            case 'SAVE_RESULT':
              console.log('paso por el reducer a guardar el result')
                return {
                  ...state,
                  result: action.result
    
                };
      default:
        return state;
    }
  }
   
  export default reducer;