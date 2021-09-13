import React from 'react';
import AnimalCrossingContainer from '../../containers/AnimalCrossing';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AnimalCrossingContainerDetails from '../../containers/AnimalCrossingDetails';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AnimalCrossingContainer}/>
        <Route exact path="/:id" component={AnimalCrossingContainerDetails}/>
      </Switch>
    </BrowserRouter>
  );
}
