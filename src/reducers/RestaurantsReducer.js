export default function manageRestaurants (
   state = {loading: false}, action
) {
   switch (action.type) {
      case "LOADING":
         return  {...state, loading: true}
      case "GET_RESTAURANTS":
         debugger
         const newRestaurants = []
         action.restaurants.forEach(r => {
            const restaurant = {
               id: r.id,
               name: r.name,
               location: r.location,
               url: r.url
            }
            newRestaurants.push(restaurant)
         })

         return {...state, loading: false, restaurants: state.restaurants.concat(newRestaurants)}
      default:
         return state
   }
}