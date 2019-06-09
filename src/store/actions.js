export const SET_VAR = "SET_VAR";
export const SET_RESTRICTIONS = "SET_RESTRICTIONS";

export function setVar(VAR) {
  console.log('paso por la action', VAR)
  return { type: SET_VAR, var: VAR };
}

export function setRestrictions(RESTRICTIONS) {
  console.log('paso por la action', RESTRICTIONS)
  return { type: SET_RESTRICTIONS, restrictions: RESTRICTIONS };
} 