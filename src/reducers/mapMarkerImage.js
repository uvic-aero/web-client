import {CURRENT_IMAGE, FETCH_IMAGES} from "../actions/mapMarkerImage";
import { PUSH_IMAGE } from "../actions/network";

let initialState = {
    images: [],
    currentImageId: 0,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_IMAGES: // fetches images from GS that did not get sent to web client
            console.log(action.payload);
            return Object.assign({}, state, {images: action.images});
        case CURRENT_IMAGE: // updates the current image-marker that is being viewed in the MapView component
            console.log(action.currentImageId);
            return Object.assign({}, state, {currentImageId: action.currentImageId});
        case PUSH_IMAGE: // merges realtime pushed images from GS with existing images in web client
            return Object.assign({}, state, {images: [...state.images, action.image]});
      default:
        return state;
    }
  }
  