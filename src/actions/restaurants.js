const url = `http://localhost:3000/zomato`

export const fetchRestaurants = (location) => {
   return function (dispatch) {
      dispatch({type: "LOADING"})
      return fetch(url, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(location)
      })
      .then(resp => resp.json())
      .then(json => console.log(json))
   }
}