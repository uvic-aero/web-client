import _ from "lodash";
import {
  NEXT_IMAGE,
  PREVIOUS_IMAGE,
  GOTO_FIRST_IMAGE,
  GOTO_LAST_IMAGE,
  GOTO_IMAGE_AT_INDEX,
  TAG_IMAGE_AT_INDEX,
  TOGGLE_TAGGING_POPOVER
} from "../actions/ImageQueue";

import { PUSH_IMAGE } from "../actions/network";

let initialState = {
  images: [],
  currentIndex: 0,
  taggedImageIndices: [],
  taggingPopoverIsOpen: false
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case PUSH_IMAGE:
      return Object.assign({}, state, {
        images: [action.image, ...state.images]
      });

    case NEXT_IMAGE:
      return Object.assign({}, state, {
        currentIndex: (state.currentIndex + 1) % state.images.length
      });
    case PREVIOUS_IMAGE:
      if (state.currentIndex === 0) {
        return Object.assign({}, state, {
          currentIndex: state.images.length - 1
        });
      } else {
        return Object.assign({}, state, {
          currentIndex: (state.currentIndex - 1) % state.images.length
        });
      }
    case GOTO_FIRST_IMAGE:
      return Object.assign({}, state, {
        currentIndex: 0
      });
    case GOTO_LAST_IMAGE:
      return Object.assign({}, state, {
        currentIndex: state.images.length - 1
      });
    case GOTO_IMAGE_AT_INDEX:
      return Object.assign({}, state, {
        currentIndex: action.index
      });
    case TAG_IMAGE_AT_INDEX:
      if (
        _.find(state.taggedImageIndices, function(i) {
          return i === action.index;
        }) === undefined
      ) {
        return Object.assign({}, state, {
          taggedImageIndices: _.concat(state.taggedImageIndices, [action.index])
        });
      } else {
        return Object.assign({}, state, {
          taggedImageIndices: _.difference(state.taggedImageIndices, [
            action.index
          ])
        });
      }
    case TOGGLE_TAGGING_POPOVER:
      return Object.assign({}, state, {
        taggingPopoverIsOpen: !state.taggingPopoverIsOpen
      });
    default:
      return state;
  }
}
