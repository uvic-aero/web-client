import { PUSH_IMAGE } from "../actions/network";
import { TOGGLE_TAG } from "../actions/images";

let initialState = [];

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case PUSH_IMAGE:
      // Avoid duplicate image ids
      if (state.find(el => el._id === action.image._id) !== undefined) {
        return state;
      }
      return [action.image, ...state].sort((a, b) => b.timestamp - a.timestamp);
    case TOGGLE_TAG:
      const idx = state.findIndex(el => el._id === action.id);
      if (idx === -1) {
        return state;
      }
      return [
        ...state.slice(0, idx),
        {
          ...state[idx],
          tagged: !state[idx].tagged
        },
        ...state.slice(idx + 1)
      ];
    default:
      return state;
  }
}
