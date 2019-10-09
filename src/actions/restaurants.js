export const fetchRestaurants = location => {
	return dispatch => {
		dispatch({ type: "LOADING" })
		const url = `https://us-restaurant-menus.p.rapidapi.com/restaurants/search/geo?page=1&lon=${location.lng}&lat=${location.lat}&distance=10`
		debugger
		return fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"X-RapidAPI-Host": "us-restaurant-menus.p.rapidapi.com",
				"X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_RESTAURANT_MENUS
			}
		})
			.then(response => {
				response.json()
			})
			.then(restaurants => {
				debugger
			})
			.catch(error => {
				console.log(error)
			})
	}
}
