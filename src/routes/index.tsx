import React from 'react';
import { Switch } from 'react-router';

import Route from './Route';

import Home from '../pages/Home';


const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default AppRoutes;
