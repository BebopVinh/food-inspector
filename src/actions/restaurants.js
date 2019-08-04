export const fetchRestaurants = (location) => {
   console.log("c")
   return dispatch => {
      dispatch({type: "LOADING"})
      const url = `http://localhost:3000/restaurants`
      return fetch(url, {
         method: 'POST',
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(location)
      })
      .then(resp => resp.json())
      .then(restaurants => {
         console.log("d")
         return dispatch({ type: "GET_RESTAURANTS", restaurants }) 
      }
       )
   }
   console.log("e")
}