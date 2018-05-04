import _ from "lodash";
import {
    SET_FILTER_UNTAGGED,
    SET_BROWSER_LOADING
} from "../actions/imageBrowser";

let initialState = {
    show: {
        untagged: true
    },
    loading: false
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER_UNTAGGED:
      return Object.assign({}, state, {
        show: { ...state.show, untagged: action.filter }
      });
    case SET_BROWSER_LOADING:
    return Object.assign({}, state, {
      loading: action.loading
    });
    default:
      return state;
  }
}
