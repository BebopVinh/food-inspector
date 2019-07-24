export const setAllergen = (allergen) => {
   return dispatch => {
      return dispatch({type: "SET_ALLERGEN", allergen})
   }
}
