import React, { Component } from 'react'
import { GoogleComponent } from 'react-google-location'

import { connect } from 'react-redux';
import {fetchRestaurants} from '../../actions/restaurants'

export class RestaurantInput extends Component {

   state = {
      place: null
   }

   handleChange = (event) => {
      // this.setState({
      //    [event.target.name]: event.target.value
      // })
      this.setState({place: event})
   }

   handleSubmit = (event) => {
      event.preventDefault()
   }

   render() {
      return (
         <div>
            
         </div>
      )
   }
}

export default connect(null, {fetchRestaurants})(RestaurantInput)
