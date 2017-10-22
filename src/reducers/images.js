import { PUSH_IMAGE } from "../actions/network";

let initialState = [];

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case PUSH_IMAGE:
      return [action.image, ...state];
    default:
      return state;
  }
}
