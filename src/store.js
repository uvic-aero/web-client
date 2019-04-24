import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { routerReducer as routing } from "react-router-redux";
import thunk from 'redux-thunk';
import ImageQueue from "./reducers/ImageQueue";
import mapMarkerImage from "./reducers/mapMarkerImage";
import settings from "./reducers/settings";
import images from "./reducers/images";
import imageBrowser from "./reducers/imageBrowser";

const middleware = [thunk];

const store = createStore(
  combineReducers({
    routing,
    ImageQueue,
    settings,
    images,
    imageBrowser,
    mapMarkerImage
  }),
  {},
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension && window.devToolsExtension()
  )
);

export default store;
