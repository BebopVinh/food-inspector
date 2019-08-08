import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

export class RecipesList extends Component {

   renderRecipes = (recipes) => {
      if (recipes.recipes.length < 1) {
         return <div><p>No recipes found.</p></div>
      } else {
         debugger
         return recipes.recipes.map(r => (
            <Card key={r.id} width="20em">
               <CardImg top width="20em" src={`${r.image}`} />
               <CardBody>
               <CardTitle>{r.label}</CardTitle>
               <CardText>
                  <ul className="recipe-info-list">
                     <li>Health-Labels: {r.healthLabels.join(", ")}</li>
                     <li>Cautions: {r.cautions}</li>
                     <ul className="ingredients-list">
                        {this.renderIngredients(r.ingredients)}
                     </ul>
                  </ul>
                  </CardText>
               </CardBody>
            </Card>
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
