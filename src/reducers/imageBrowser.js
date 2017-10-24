import _ from "lodash";
import {
    SET_FILTER_UNTAGGED
} from "../actions/imageBrowser";

let initialState = {
    show: {
        untagged: true
    }
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER_UNTAGGED:
      return Object.assign({}, state, {
        show: { ...state.show, untagged: action.filter }
      });
    default:
      return state;
  }
}
