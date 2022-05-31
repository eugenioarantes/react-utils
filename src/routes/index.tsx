import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from '../pages/Login';


const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Login} />
    </Switch>
  );
};

export default AppRoutes;
