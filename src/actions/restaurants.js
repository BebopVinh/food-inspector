export const fetchRestaurants = location => {
	return async dispatch => {
		dispatch({ type: "LOADING" })
		const url = `http://localhost:3000/restaurants`

		const resp = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(location)
		})

		const restaurants = await resp.json()
		console.log(restaurants)
		dispatch({ type: "GET_RESTAURANTS", restaurants })
	}
}
