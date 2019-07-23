import React, { Component } from 'react'
import Restaurant from './Restaurant'


export class RestaurantsList extends Component {

   renderRestaurants = () => { 
      if (!!this.props.restaurants.length) 
      return this.props.restaurants.map(r =>
         <Restaurant restaurant={r} key={r.id} />
      )
   }

   componentWillUpdate(nextProps, nextState) {
      document.querySelector('div.restaurants-list').innerHTML = ""
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
