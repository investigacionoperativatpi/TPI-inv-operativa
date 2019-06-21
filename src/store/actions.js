export const SET_VAR = "SET_VAR";
export const SET_RESTRICTIONS = "SET_RESTRICTIONS";
export const SHOW_ORNOT_OBJ_FUNCTION = 'SHOW_ORNOT_OBJ_FUNCTION';

export function setVar(VAR) {
  console.log('paso por la action', VAR)
  return { type: SET_VAR, var: VAR };
}

export function setRestrictions(RESTRICTIONS) {
  console.log('paso por la action', RESTRICTIONS)
  return { type: SET_RESTRICTIONS, restrictions: RESTRICTIONS };
} 

export function showOrNotObjFunction() {
  console.log('paso por la action de abrir o cerrar')
  return { type: SHOW_ORNOT_OBJ_FUNCTION };
} 