import React, { Component } from 'react'

export class RecipesList extends Component {

   renderRecipes = (recipes) => {
      if (recipes.recipes.length < 1) {
         return <div><p>No recipes found.</p></div>
      } else {
         return recipes.recipes.map(r => (
            <div key={r.id}>
            <span>
               <img src={`${r.image}`}/>
                  <p>Name: {r.label}</p>
                  <ul className="recipe-info-list">
                     <li>Health-Labels: {r.healthLabels.join(", ")}</li>
                     <li>Cautions: {r.cautions}</li>
                     <ul className="ingredients-list">
                        {this.renderIngredients(r.ingredients)}
                     </ul>
                  </ul>
            </span>
            <br/><br/>
            </div>
         ))
      }
   }

   renderIngredients = (ingredients) => {
      return ( ingredients.map(ing => {
            const setStyle = {}
            if (ing.text.toLowerCase().includes(this.props.userAllergen)) {
               setStyle.color = "red"
            } else {
               setStyle.color = "black"
            }
            return <li style={setStyle}> {ing.text} </li>
         })
      )
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
