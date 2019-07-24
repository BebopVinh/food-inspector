import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAllergen } from '../actions/allergens'

export class AllergenInput extends Component {

   state = {allergen: ""}

   handleChange = (event) => {
      this.setState({
         [event.target.name] : event.target.value
      })
   }

   handleSubmit = (event) => {
      event.preventDefault()
      this.props.setAllergen(this.state.allergen)
   }

   renderForm = () => {
      if (!this.props.userAllergen) {
         return (
            <form onSubmit={this.handleSubmit}>
               <label>What are you allergic to?</label>
               <input type="text" name="allergen" value={this.state.allergen} onChange={this.handleChange} />
               <input type="submit" />
            </form>
         )
      } else {
         return (
            <p>You're allergic to: {this.props.userAllergen}</p>
         )
      }
   }

   render() {
      return (
         <div>
            {this.renderForm()}
         </div>
      )
   }
}

const mapStateToProps = (state) => {
   return {userAllergen: state.allergen.userAllergen}
}

export default connect(mapStateToProps, {setAllergen})(AllergenInput)
