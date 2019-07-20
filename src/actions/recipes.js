export const fetchRecipes = (state) => {
   return dispatch => {
      dispatch({type: "LOADING_RECIPES"})
      const url = `http://localhost:3000/recipes`
      return fetch(url, {
         method: 'POST',
         headers: {
            "Content-Type": 'application/json'
         },
         body: JSON.stringify(state)
      })
      .then(resp => resp.json())
      .then(recipes => dispatch({type: "FETCH_RECIPES", recipes}))
   }
}
