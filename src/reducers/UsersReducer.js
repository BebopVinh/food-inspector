export default function manageUsers(
   state = {}, action
) {
   switch(action.type) {

      case "SET_USER":
         return state = action.user

      case "MAKE_USER":
         return state = action.user

      case "SET_ALLERGEN":
         return {...state, userAllergen: action.allergen.allergen}

      default:
         return state
   }
}