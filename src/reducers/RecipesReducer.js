export default function manageRecipes (
   state = {loading: false, recipes: []}, action
) {
   switch (action.type) {

      case "LOADING_RECIPES":
         return {...state, loading: true}

      case "FETCH_RECIPES":
         let newRecipes = action.recipes.map(obj => obj.recipe)
         return {...state, recipes: newRecipes}
      default:
         return state
   }
}