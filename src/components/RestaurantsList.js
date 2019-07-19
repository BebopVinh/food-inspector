import React, { Component } from 'react'
import Restaurant from '../components/Restaurant'


export class RestaurantsList extends Component {

   renderRestaurants = () => {
      
      return this.props.restaurants.map(r =>
         <Restaurant restaurant={r} key={r.id} />
      )
   }

   render() {
      return (
         <div className="restaurants-list">
            {this.renderRestaurants()}
         </div>
      )
   }
}

export default RestaurantsList
