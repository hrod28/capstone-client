'use strict';
import {combineReducers} from 'redux';
import chefs from './chefReducer';

const rootReducer = combineReducers({
  chefs
});

export default rootReducer;
