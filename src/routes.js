'use strict';
import React from 'react';

import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import StagePage from './components/stage/StagePage';
import ChefProfilePage from './components/chefs/ChefProfilePage';
import SchedulesPage from './components/schedules/SchedulesPage';
import WorkshopsPage from './components/workshops/WorkshopsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="stages" component={StagePage} />
    <Route path="chefs" component={ChefProfilePage} />
    <Route path="schedules" component={SchedulesPage} />
    <Route path="workshops" component={WorkshopsPage} />
  </Route>
);

