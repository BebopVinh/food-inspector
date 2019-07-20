import React, { Component } from 'react'

export class RecipesInput extends Component {

   state = {
      recipe: ""
   }

   handleChange = event => {
      this.setState({ [event.target.name]: event.target.value })
   }

   handleSubmit = event => {
      event.preventDefault()
      this.props.fetchRecipes(this.state)
   }

   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <input name="recipe" type="text" value={this.state.recipe} onChange={this.handleChange}/>
            <input type="submit" value="Search!"/>
         </form>
      )
   }
}

export default RecipesInput
