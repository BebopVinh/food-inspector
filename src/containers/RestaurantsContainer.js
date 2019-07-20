import React, { Component } from 'react'
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import RestaurantInput from '../components/restaurants/RestaurantInput';
import RestaurantsList from '../components/restaurants/RestaurantsList'


class RestaurantsContainer extends Component {

   render() {
      return (
         <div>
            <RestaurantInput />
            <RestaurantsList restaurants={this.props.restaurants}/>
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {restaurants: state.restaurants}
}

RestaurantsContainer.defaultProps = {
   restaurants: []
}

export default connect(mapStateToProps)(RestaurantsContainer)
