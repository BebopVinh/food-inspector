export default function manageAllergen(state = {
   userAllergen: ""
}, action) {
   switch(action.type) {
      case "SET_ALLERGEN":
         return {...state, userAllergen: action.allergen.toLowerCase()}
      default:
         return state
   }
}