export default function manageRestaurants (
   state = {loading: false}, action
) {
   switch (action.type) {
      case "LOADING":
         return  {...state, loading: true}
      case "SEARCH_RESTAURANT":
         debugger
      default:
         return state
   }
}