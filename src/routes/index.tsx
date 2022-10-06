import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Home from '../pages/Home';


const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} isPrivate/>
      <Route path="/login" exact component={Login} />
    </Switch>
  );
};

export default AppRoutes;
