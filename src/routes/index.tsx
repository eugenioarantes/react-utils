import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Settings from '../pages/Settings';
import Tasks from '../pages/Tasks';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  );
};

export default AppRoutes;
