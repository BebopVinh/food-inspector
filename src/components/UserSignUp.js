import React, { Component } from 'react'
import { connect } from 'react-redux'
import { makeUser } from '../actions/users'
import { Link } from 'react-router-dom'

export class UserSignUp extends Component {

   state = {
      email: "",
      password: "",
      password_confirmation: ""
   }

   handleChange = (event) => {
      this.setState({[event.target.name] : event.target.value})
   }

   handleSubmit = (event) => {
      event.preventDefault()
      this.props.makeUser(this.state)
   }

   renderHomeLink = () => {
      if (!!this.props.token) {
         return <Link to="/user/profile">Profile</Link>
      } else {
         return null
      }
   }

   render() {
      return (
         <React.Fragment>
            <form onSubmit={this.handleSubmit}>
               <label>Email:
                  <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
               </label>
               <br/>
               <label>Password:
                  <input type="password" name="password"value={this.state.password} onChange={this.handleChange}/>
               </label>
               <br/>
               <label>Confirm Password:
                  <input type="password" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleChange}/>
               </label>

               <input type="submit" value="Sign Up"/>
            </form>

            {this.renderHomeLink()}
         </React.Fragment>
      )
   }
}

const mapStateToProps = (state) => {
   console.log(state)
   return {token: state.user.authentication_token}
}

export default connect(mapStateToProps, {makeUser})(UserSignUp)
