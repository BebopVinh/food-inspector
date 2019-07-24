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
                        {r.ingredients.map(ing => <li>{ing.text}</li>)}
                     </ul>
                  </ul>
            </span>
            <br/><br/>
            </div>
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
