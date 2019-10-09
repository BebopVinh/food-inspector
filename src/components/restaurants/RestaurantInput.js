import React, { Component } from "react"
import Geocode from "react-geocode"

import { connect } from "react-redux"
import { fetchRestaurants } from "../../actions/restaurants"

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_GEOCODE_API_KEY)

export class RestaurantInput extends Component {
	state = {
		location: null
	}

	handleChange = event => {
		this.setState({ location: event.target.value })
	}

	handleSubmit = event => {
		event.preventDefault()
		Geocode.fromAddress(this.state.location)
			.then(
				response => {
					const { lat, lng } = response.results[0].geometry.location
					return { lat, lng }
				},
				error => {
					console.error(error)
				}
			)
			.then(location => {
				this.props.fetchRestaurants(location)
			})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Search by Location: </label>
					<input
						type="text"
						name="location"
						value={this.state.location}
						onChange={this.handleChange}
					/>

					<input type="submit" value="Search!" />
				</form>
			</div>
		)
	}
}

export default connect(
	null,
	{ fetchRestaurants }
)(RestaurantInput)
