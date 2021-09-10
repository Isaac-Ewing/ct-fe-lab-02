import React from 'react';
import AnimalCrossingContainer from '../../containers/AnimalCrossing';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AnimalCrossingContainer}/>
        <Route exact path="/:id" component={AnimalCrossingContainer}/>
      </Switch>
    </BrowserRouter>
  );
}
