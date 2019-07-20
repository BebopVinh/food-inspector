import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipesInput from '../components/recipes/RecipesInput'
import {fetchRecipes} from '../actions/recipes'

class RecipesContainer extends Component {

   render() {
      return (
         <div>
            <RecipesInput fetchRecipes={this.props.fetchRecipes}/>
         </div>
      )
   }
}

const mapStateToProps = (state) => ({
   
})


export default connect(mapStateToProps, {fetchRecipes})(RecipesContainer)
