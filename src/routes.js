import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppComponent from './components/App/AppComponent';
import ImageQueueComponent from './components/ImageQueue/ImageQueueComponent';

export default (
  <Route>
    <Route path='/' component={AppComponent}>
      <IndexRoute component={ImageQueueComponent} />
    </Route>
  </Route>
);