import _ from "lodash";
import {
  NEXT_IMAGE,
  PREVIOUS_IMAGE,
  GOTO_FIRST_IMAGE,
  GOTO_LAST_IMAGE,
  GOTO_IMAGE_AT_INDEX,
  TAG_IMAGE_AT_INDEX,
  TOGGLE_TAGGING_POPOVER,
  SET_QUEUE_AUTOSCROLL
} from "../actions/ImageQueue";

import { PUSH_IMAGE } from "../actions/network";

let initialState = {
  images: [],
  currentIndex: 0,
  taggedImageIndices: [],
  taggingPopoverIsOpen: false,
  autoscroll: true
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case PUSH_IMAGE:
      return Object.assign({}, state, {
        images: [action.image, ...state.images],
        currentIndex: state.autoscroll === true ? 0 : state.currentIndex + 1
      });
    case NEXT_IMAGE:
      return Object.assign({}, state, {
        currentIndex: (state.currentIndex + 1) % state.images.length,
        autoscroll: false
      });
    case PREVIOUS_IMAGE:
      if (state.currentIndex === 0) {
        return Object.assign({}, state, {
          currentIndex: 0,
          autoscroll: true
        });
      } else {
        return Object.assign({}, state, {
          currentIndex: (state.currentIndex - 1) % state.images.length,
          autoscroll: false
        });
      }
    case GOTO_FIRST_IMAGE:
      return Object.assign({}, state, {
        currentIndex: 0,
        autoscroll: true
      });
    case GOTO_LAST_IMAGE:
      return Object.assign({}, state, {
        currentIndex: state.images.length - 1,
        autoscroll: false
      });
    case GOTO_IMAGE_AT_INDEX:
      return Object.assign({}, state, {
        currentIndex: action.index,
        autoscroll: false
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
    case SET_QUEUE_AUTOSCROLL:
      return Object.assign({}, state, {
        autoscroll: action.scroll
      });
    default:
      return state;
  }
}
