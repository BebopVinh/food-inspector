export const fetchRestaurants = location => {
	return dispatch => {
		dispatch({ type: "LOADING" })
		const url = `http://localhost:3000/restaurants`
		return fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(location)
		})
			.then(resp => resp.json())
			.then(restaurants =>
				dispatch({ type: "GET_RESTAURANTS", restaurants })
			)
	}
}
