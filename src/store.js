import { createStore, combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import ImageQueue from "./reducers/ImageQueue";
import settings from "./reducers/settings";
import images from "./reducers/images";

const store = createStore(
  combineReducers({
    routing,
    ImageQueue,
    settings,
    images
  }),
  {},
  window.devToolsExtension && window.devToolsExtension()
);

export default store;
