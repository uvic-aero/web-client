import { SET_QUEUE_AUTOSCROLL } from "../actions/settings";

let initialState = {
  imageQueue: {
    autoscroll: true
  }
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case SET_QUEUE_AUTOSCROLL:
      return Object.assign({}, state, {
        imageQueue: { ...state.imageQueue, autoscroll: action.scroll }
      });

    default:
      return state;
  }
}
