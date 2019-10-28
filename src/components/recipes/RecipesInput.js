import React, { useState } from "react"

export default function RecipesInput(props) {
	const [recipe, setRecipe] = useState("")

	const handleSubmit = event => {
		event.preventDefault()
		props.fetchRecipes(recipe)
	}

	return (
		<div>
			<h2>Recipes Search Bar</h2>
			<form onSubmit={handleSubmit}>
				<input
					name="recipe"
					type="text"
					value={recipe}
					onChange={event => {
						setRecipe(event.target.value)
					}}
				/>
				<input type="submit" value="Search!" />
			</form>
		</div>
	)
}
