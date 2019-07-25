import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import AllergenInput from './AllergenInput'

export class UserProfile extends Component {

   renderProfile = () => {
      const allergen = this.props.user.userAllergen
      const token = this.props.user.authentication_token
      if (!!allergen && !!token) {
         return <div>Your set Allergen is: {allergen}</div>
      } else if (!allergen && !!token) {
         return <AllergenInput user_id={this.props.user.id}/>
      } else {
         return (
            <span>
               Please
               Sign In (need to generate link here) or 
               <Link to="/sign_up">Sign Up</Link>
            </span>
            
         )
      }
   }

   render() {
      return (
         <div>
            {this.renderProfile()}
         </div>
      )
   }
}

const mapStateToProps = (state) => {
   console.log(state)
   return {
      user: state.user
   }
}


export default connect(mapStateToProps)(UserProfile)
