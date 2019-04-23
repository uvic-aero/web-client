import {CURRENT_IMAGE} from "../actions/mapMarkerImage";
import { PUSH_IMAGE } from "../actions/network";

let initialState = {
    images: [],
    currentImageId: 0,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case CURRENT_IMAGE:
            return {
                ...state,
                currentImageId: action.currentImageId
            };
        case PUSH_IMAGE:
            return state;
      default:
        return state;
    }
  }
  