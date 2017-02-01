import { createStore, combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

const store = createStore(combineReducers({
  routing
}), {}, window.devToolsExtension && window.devToolsExtension());

export default store;