import {combineReducers} from 'redux'
import RecipesReducer from './RecipesReducer'
import RestaurantsReducer from './RestaurantsReducer'

const rootReducer = combineReducers(
   {
      recipes: RecipesReducer,
      restaurants: RestaurantsReducer
   }
)

export default rootReducer