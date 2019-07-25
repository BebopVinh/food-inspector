import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'
import RecipesContainer from './containers/RecipesContainer'
import RestaurantsContainer from './containers/RestaurantsContainer'
import Restaurant from './components/restaurants/Restaurant'
import UserSignUp from './components/UserSignUp'
import UserProfile from './components/UserProfile'


function App() {

  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/restaurants/:restaurant_id" component={Restaurant} />
        <Route exact path="/recipes/:name" component={RecipesContainer} />
        <Route exact path="/recipes" component={RecipesContainer} />

        <Route exact path="/sign_up" component={UserSignUp}/>
        {/* <Route exact path="/sign_in" component={UserSignIn}/> */}
        <Route exact path="/user/profile" component={UserProfile} />

        <Route exact path="/" component={RestaurantsContainer}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
