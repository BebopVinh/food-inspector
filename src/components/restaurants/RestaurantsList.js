import React, { Component } from "react"
import { Link } from "react-router-dom"

export class RestaurantsList extends Component {
	renderRestaurants = () => {
		const { restaurants } = this.props
		if (!!restaurants)
			return restaurants.result.data.map(r => {
				return (
					<Link
						to={{
							pathname: `/restaurants/${r.restaurant_id}`,
							state: { restaurant: r }
						}}
					>
						{r.restaurant_name}
						<br />
					</Link>
				)
			})
	}

	// componentWillUpdate(nextProps, nextState) {
	// 	document.querySelector("div.restaurants-list").innerHTML = ""
	// }

	render() {
		return <div className="restaurants-list">{this.renderRestaurants()}</div>
	}
}

export default RestaurantsList
