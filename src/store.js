import { createStore, combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import ImageQueue from "./reducers/ImageQueue";
import settings from "./reducers/settings";

const store = createStore(
  combineReducers({
    routing,
    ImageQueue,
    settings
  }),
  {},
  window.devToolsExtension && window.devToolsExtension()
);

export default store;
