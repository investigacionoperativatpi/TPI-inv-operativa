export const SET_VAR = "SET_VAR";
export const SET_RESTRICTIONS = "SET_RESTRICTIONS";
export const SHOW_ORNOT_OBJ_FUNCTION = 'SHOW_ORNOT_OBJ_FUNCTION';
export const SET_OBJ_FUNCTION = 'SET_OBJ_FUNCTION'

export function setVar(VAR) {
  return { type: SET_VAR, var: VAR };
}

export function setRestrictions(RESTRICTIONS) {
  return { type: SET_RESTRICTIONS, restrictions: RESTRICTIONS };
} 

export function showOrNotObjFunction() {
  return { type: SHOW_ORNOT_OBJ_FUNCTION };
} 

export function setObjFunction(OBJ) {
  console.log('en la action',OBJ)
  return { type: SET_OBJ_FUNCTION, obj: OBJ };
} 