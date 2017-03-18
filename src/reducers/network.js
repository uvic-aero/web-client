import {
  PUSH_IMAGE
} from '../actions/network';

let initialState = {
  images: []
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case PUSH_IMAGE:
	  return Object.assign({}, state, { images: [...state.images, action.image]});
    default:
      return state
  }
}
