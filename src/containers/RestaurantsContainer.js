import React, { Component } from 'react'
import { connect } from 'react-redux';
import RestaurantInput from '../components/RestaurantInput';
import {fetchRestaurants} from '../actions/restaurants'

class RestaurantsContainer extends Component {
   render() {
      return (
         <div>
            <RestaurantInput />
         </div>
      )
   }
}

// const mapDispatchToProps = dispatch => {
//    return {fetchRestaurants: (location) => dispatch({type: "SEARCH_RESTAURANT", location})}
// }

export default (RestaurantsContainer)
