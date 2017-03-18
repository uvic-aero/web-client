import { createStore, combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import ImageQueue from './reducers/ImageQueue';
import network from './reducers/network';

const store = createStore(
  combineReducers({
	routing,
	ImageQueue,
  network
  }), 
  {}, 
  window.devToolsExtension && window.devToolsExtension()
);

export default store;