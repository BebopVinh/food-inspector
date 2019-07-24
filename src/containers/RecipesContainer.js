import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipesInput from '../components/recipes/RecipesInput'
import RecipesList from '../components/recipes/RecipesList'
import {fetchRecipes} from '../actions/recipes'

class RecipesContainer extends Component {

   render() {
      return (
         <div>
            <RecipesInput fetchRecipes={this.props.fetchRecipes}/>
            <br/> <br/>
            <RecipesList recipes={this.props.recipes} />
         </div>
      )
   }
}

const mapStateToProps = (state) => {
   return {recipes: state.recipes}
}


export default connect(mapStateToProps, {fetchRecipes})(RecipesContainer)
