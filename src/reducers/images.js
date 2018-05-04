import { PUSH_IMAGE } from "../actions/network";

let initialState = [];

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case PUSH_IMAGE:
      // Avoid duplicate image ids
      if (state.find(el => el._id === action.image._id) !== undefined) {
        return state;
      }
      return [action.image, ...state].sort((a, b) => b.timestamp - a.timestamp);
    default:
      return state;
  }
}
