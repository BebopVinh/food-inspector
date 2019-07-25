import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipesInput from '../components/recipes/RecipesInput'
import RecipesList from '../components/recipes/RecipesList'
import {fetchRecipes} from '../actions/recipes'

class RecipesContainer extends Component {

   componentDidMount() {
      if (!!this.props.match.params.name) {
         this.props.fetchRecipes({recipe: this.props.match.params.name})
      }
   }
   
   render() {
      return (
         <div>
            <RecipesInput fetchRecipes={this.props.fetchRecipes}/>
            <br/><br/>
            <RecipesList recipes={this.props.recipes} userAllergen={this.props.userAllergen}/>
         </div>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      recipes: state.recipes,
      userAllergen: state.allergen.userAllergen
   }
}


export default connect(mapStateToProps, {fetchRecipes})(RecipesContainer)
