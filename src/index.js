'use strict';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import routes from './routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
      <Router />
    </MuiThemeProvider>,
  document.getElementById('root')
);
