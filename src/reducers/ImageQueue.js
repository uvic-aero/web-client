import {
  NEXT_IMAGE,
  PREVIOUS_IMAGE,
  GOTO_FIRST_IMAGE,
  GOTO_LAST_IMAGE,
} from '../actions/ImageQueue'

let initialState = {
  images: ['./image.jpg', './image2.png'],
  currentIndex: 0,
}

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case NEXT_IMAGE:
	  return Object.assign({}, state, {
		currentIndex: state.currentIndex + 1
	  })
    case PREVIOUS_IMAGE:
	  return Object.assign({}, state, {
		currentIndex: state.currentIndex - 1
	  })
    case GOTO_FIRST_IMAGE:
	  return Object.assign({}, state, {
		currentIndex: 0
	  })
    case GOTO_LAST_IMAGE:
	  return Object.assign({}, state, {
		currentIndex: 1
	  })
    default:
      return state
  }
}
