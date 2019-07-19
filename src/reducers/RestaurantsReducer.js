export default function manageRestaurants (
   state = {loading: false, restaurants: []}, action
) {
   switch (action.type) {
      case "LOADING":
         return  {...state, loading: true}
      case "GET_RESTAURANTS":
         const newRestaurants = []
         action.restaurants.forEach(r => {
            const restaurant = {
               id: r.restaurant.id,
               name: r.restaurant.name,
               location: r.restaurant.location,
               url: r.restaurant.url
            }
            newRestaurants.push(restaurant)
         })
         return {...state, loading: false, restaurants: state.restaurants.concat(newRestaurants)}
      default:
         return state
   }
}