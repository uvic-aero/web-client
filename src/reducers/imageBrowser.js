import _ from "lodash";
import { SET_FILTER, SET_BROWSER_LOADING } from "../actions/imageBrowser";

let initialState = {
  filters: {
    tagged: true,
    untagged: true
  },
  loading: false
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return Object.assign({}, state, {
        filters: {
          ...state.filters,
          [action.filter]: action.active
        }
      });
    case SET_BROWSER_LOADING:
      return Object.assign({}, state, {
        loading: action.loading
      });
    default:
      return state;
  }
}
