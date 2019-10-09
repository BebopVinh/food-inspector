import React, { Component } from 'react'
import Geocode from "react-geocode"

import { connect } from 'react-redux';
import {fetchRestaurants} from '../../actions/restaurants'

Geocode.setApiKey("AIzaSyCgr_0s9OuufJRDtnZhIizU9u8ZhPh1rp4")

export class RestaurantInput extends Component {

   state = {
      location: null
   }

   handleChange = (event) => {
      this.setState({location: event.target.value})
   }

   handleSubmit = (event) => {

      event.preventDefault()
      const latLng = Geocode.fromAddress(this.state.location).then(
         response => {
            const { lat, lng } = response.results[0].geometry.location
            console.log(lat, lng)
            return {lat, lng}
         },
         error => {
            console.error(error)
         }
      )
      console.log(latLng)
      this.props.fetchRestaurants({location: latLng})
   }

   render() {
      return (
         <div>
            <form onSubmit={this.handleSubmit}>
               <label>Search by Location: </label>
               <input type="text" name="location" value={this.state.location} onChange={this.handleChange}/>

               <input type="submit" value="Search!"/>
            </form>
         </div>
      )
   }
}

export default connect(null, {fetchRestaurants})(RestaurantInput)
