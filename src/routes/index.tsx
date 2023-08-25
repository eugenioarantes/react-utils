import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Informations from '../pages/Informations';
import CreateTask from '../pages/CreateTask';
import Tasks from '../pages/Tasks';
import Settings from '../pages/Settings';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/informations" element={<Informations />} />
      <Route path="/create-task" element={<CreateTask />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;
