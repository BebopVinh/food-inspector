import React, { Component } from 'react'

import { connect } from 'react-redux';
import {fetchRestaurants} from '../../actions/restaurants'

export class RestaurantInput extends Component {

   state = {
      location: null
   }

   handleChange = (event) => {
      this.setState({location: event.target.value})
   }

   handleSubmit = (event) => {
      event.preventDefault()
      this.props.fetchRestaurants(this.state)
   }

   render() {
      return (
         <div>
            <form onSubmit={this.handleSubmit}>
               <label htmlFor="">Search by Location: </label>
               <input type="text" name="location" value={this.state.location} onChange={this.handleChange}/>

               <input type="submit" value="Search!"/>
            </form>
         </div>
      )
   }
}

export default connect(null, {fetchRestaurants})(RestaurantInput)
