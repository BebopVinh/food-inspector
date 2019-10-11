export const fetchRestaurants = location => {
	return dispatch => {
		dispatch({ type: "LOADING" })
		const url =
			"https://us-restaurant-menus.p.rapidapi.com/restaurants/search/geo"
		const lon = location.lng
		const lat = location.lat
		const distance = 20
		const page = 1
		const full_url =
			url + `?lon=${lon}&lat=${lat}&distance=${distance}&page=${page}`
		const request = async () => {
			const response = await fetch(full_url, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"X-RapidAPI-Host": "us-restaurant-menus.p.rapidapi.com",
					"X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_RESTAURANT_MENUS
				}
			})
			const json = await response.json()
			debugger
			console.log(json)
		}
		debugger
		return request()

		// fetch(full_url, {
		// 	method: "GET",
		// 	headers: {
		// 		"X-RapidAPI-Host": "us-restaurant-menus.p.rapidapi.com",
		// 		"X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_RESTAURANT_MENUS
		// 	}
		// })
		// 	.then(response => {
		// 		debugger
		// 		console.log(response)
		// 	})
		// 	.then(data => {
		// 		console.log(data)
		// 	})
		// 	.catch(error => {
		// 		console.log(error)
		// 	})
	}
}
