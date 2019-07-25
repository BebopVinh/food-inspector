import {combineReducers} from 'redux'
import RecipesReducer from './RecipesReducer'
import RestaurantsReducer from './RestaurantsReducer'
import UsersReducer from './UsersReducer'

const rootReducer = combineReducers(
   {
      recipes: RecipesReducer,
      restaurants: RestaurantsReducer,
      user: UsersReducer
   }
)

export default rootReducer