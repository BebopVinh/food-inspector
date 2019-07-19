import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchRestaurants} from '../actions/restaurants'

export class RestaurantInput extends Component {

   state = {
      location: ""
   }

   handleChange = (event) => {
      this.setState({
         location: event.target.value
      })
   }

   handleSubmit = (event) => {
      event.preventDefault()
      this.props.fetchRestaurants(this.state)
   }

   render() {
      return (
         <div>
            <form onSubmit={this.handleSubmit}>
               <p>Search by Location: </p>
               {/* <input type="text" name="location" onChange={this.handleChange} value={this.state.location}/> */}
               <label>
                  <input type="radio" name="opt1" value="37.7749, -122.4194" onChange={this.handleChange}/>
                  San Francisco
               </label>
               <br/>
               <label>
                  <input type="radio" name="opt1" value="29.9511, -90.0715" onChange={this.handleChange}/>
                  New Orleans
               </label>
               <br/>
               <label>
                  <input type="radio" name="opt1" value="41.8781, -87.6298" onChange={this.handleChange}/>
                  Chicago
               </label>
               <br/>
               <input type="submit" value="Search Restaurants"/>
            </form>
         </div>
      )
   }
}

export default connect(null, {fetchRestaurants})(RestaurantInput)
