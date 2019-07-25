import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAllergen } from '../actions/users'

export class AllergenInput extends Component {

   state = {allergen: ""}

   handleChange = (event) => {
      this.setState({
         [event.target.name] : event.target.value
      })
   }

   handleSubmit = (event) => {
      event.preventDefault()
      this.props.setAllergen({...this.state, user_id: this.props.user_id})
   }


   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <label>What are you allergic to?</label>
            <input type="text" name="allergen" value={this.state.allergen} onChange={this.handleChange} />
            <input type="submit" />
         </form>
      )
   }
}

export default connect(null, {setAllergen})(AllergenInput)
