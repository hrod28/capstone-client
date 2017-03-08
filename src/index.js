'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router.js';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


ReactDOM.render(
    <MuiThemeProvider>
      <Router />
    </MuiThemeProvider>
  ,
  document.getElementById('root')
);
