import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'
import RecipesContainer from './containers/RecipesContainer'
import RestaurantsContainer from './containers/RestaurantsContainer'
import Restaurant from './components/restaurants/Restaurant'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/restaurants/:restaurant_id" component={Restaurant}/>
        <Route exact path="/recipes/:name" component={RecipesContainer} />
        <Route exact path="/recipes" component={RecipesContainer} />
        <Route exact path="/" component={RestaurantsContainer}/>
      </Switch>
    </div>
  );
}

export default App;
