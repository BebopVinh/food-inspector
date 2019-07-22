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
         <div>
            <h2>Recipes Search Bar</h2>
            <form onSubmit={this.handleSubmit}>
               <input name="recipe" type="text" value={this.state.recipe} onChange={this.handleChange}/>
               <input type="submit" value="Search!"/>
            </form>
         </div>
      )
   }
}

export default RecipesInput
