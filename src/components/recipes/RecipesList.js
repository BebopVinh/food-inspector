import React, { Component } from 'react'
import Recipe from './Recipe'

export class RecipesList extends Component {

   renderRecipes = (recipes) => {
      if (recipes.recipes.length < 1) {
         return <div><p>No recipes found.</p></div>
      } else {
         return recipes.recipes.map(r => (
            <Recipe key={r.id} recipe={r} userAllergen={this.props.userAllergen} />
         ))
      }
   }

   render() {
      const recipes = this.props.recipes
      return (
         <div>
            {this.renderRecipes(recipes)}
         </div>
      )
   }
}

export default RecipesList
