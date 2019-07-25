export const makeUser = (state) => {
   return (dispatch) => {
      dispatch({type: "LOADING"})
      const url = "http://localhost:3000/sign_up"
      return fetch(url, {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({user: state})
      })
      .then(resp => resp.json())
      // .then(user => console.log(user))
      .then(user => dispatch({type: "MAKE_USER", user}))
   }
}

export const setUser = (state) => {
   return (dispatch) => {
      dispatch({type: "LOADING"})
      const url = "http://localhost:3000/sessions"
      return fetch(url, {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({user: state})
      })
      .then(resp => resp.json())
      .then(user => dispatch({type: "SET_USER",}))
   }
}

export const setAllergen = (state) => {
   return dispatch => {
      dispatch({ type: "LOADING" })
      const url = "http://localhost:3000/set_allergen"
      return fetch(url, {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({ user: state })
      })
      .then(resp => resp.json())
      .then(allergen => dispatch({type: "SET_ALLERGEN", allergen}))
   }
}
