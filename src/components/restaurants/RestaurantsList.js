import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export class RestaurantsList extends Component {

   renderRestaurants = () => { 
      if (!!this.props.restaurants.length > 0)
      return (
         this.props.restaurants.map(r => {
               return <Link to={{
                  pathname: `/restaurants/${r.restaurant_id}`,
                  state: {restaurant: r}
               }}>{r.restaurant_name}<br/>
               </Link> 
            }
         )
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
