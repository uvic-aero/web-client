import {CURRENT_IMAGE, FETCH_IMAGES} from "../actions/mapMarkerImage";
import { PUSH_IMAGE } from "../actions/network";

let initialState = {
    images: [],
    currentImageId: undefined,
    avgCoord: {'lat': 48.5883581, 'lng': -71.8405389} // Alma coords
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_IMAGES: // fetches images from GS that did not get sent to web client
            let computedCoord = computeAvgCoord(action.images);
            return Object.assign({}, state, {images: action.images}, {avgCoord: computedCoord});
        case CURRENT_IMAGE: // updates the current image-marker that is being viewed in the MapView component
            return Object.assign({}, state, {currentImageId: action.currentImageId});
        case PUSH_IMAGE: // merges realtime pushed images from GS with existing images in web client
            return Object.assign({}, state, {images: [...state.images, action.image]});
      default:
        return state;
    }
  }


function computeAvgCoord(coords) {
    var lat = 0;
    var lng = 0;
    const numCoords = coords.length;
    coords.forEach(coord => {
        lat +=coord.telemetry['lat'];
        lng +=coord.telemetry['lon'];
    });
    return {'lat': lat/numCoords, 'lng': lng/numCoords};
}
  