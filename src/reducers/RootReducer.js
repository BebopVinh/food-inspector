import {combineReducers} from 'redux'
import RecipesReducer from './RecipesReducer'
import RestaurantsReducer from './RestaurantsReducer'
import AllergenReducer from './AllergenReducer'

const rootReducer = combineReducers(
   {
      recipes: RecipesReducer,
      restaurants: RestaurantsReducer,
      allergen: AllergenReducer
   }
)

export default rootReducer