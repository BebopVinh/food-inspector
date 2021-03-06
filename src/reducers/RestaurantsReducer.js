export default function manageRestaurants(
	state = { loading: false, restaurants: null },
	action
) {
	switch (action.type) {
		case "LOADING":
			return { ...state, loading: true }
		case "GET_RESTAURANTS":
			return { ...state, loading: false, restaurants: action.restaurants }
		default:
			return state
	}
}
