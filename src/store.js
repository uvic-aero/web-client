import { createStore, combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import ImageQueue from './reducers/ImageQueue';

const store = createStore(
  combineReducers({
	routing,
	ImageQueue
  }), 
  {}, 
  window.devToolsExtension && window.devToolsExtension()
);

export default store;