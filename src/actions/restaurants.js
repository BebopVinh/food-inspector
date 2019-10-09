export const fetchRestaurants = (location) => {
   // return dispatch => {
   //    dispatch({type: "LOADING"})
   //    const url = `http://localhost:3000/restaurants`
   //    return fetch(url, {
   //       method: 'POST',
   //       headers: {
   //          "Content-Type": "application/json"
   //       },
   //       body: JSON.stringify(location)
   //    })
   //    .then(resp => resp.json())
   //    .then(restaurants => dispatch({type: "GET_RESTAURANTS", restaurants}))
   // }
   debugger
   return dispatch => {
      dispatch({type: "LOADING"})
      const url = `https://us-restaurant-menus.p.rapidapi.com/restaurants/search`
      return fetch(url, {
         method: 'GET',
         body: JSON.stringify({"lat": location.lat, "lon": location.lon}),
         headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Host": "us-restaurant-menus.p.rapidapi.com",
            "X-RapidAPI-Key": "a65e0a6ec9mshe629e4a46efeb13p1f5432jsn0b66f46daafb"
         }
      }).then(resp => console.log(resp))
   }
}