import {
  NEXT_IMAGE,
  PREVIOUS_IMAGE,
  GOTO_FIRST_IMAGE,
  GOTO_LAST_IMAGE,
  GOTO_IMAGE_AT_INDEX,
} from '../actions/ImageQueue'

let initialState = {
  images: ['./image.jpg', './image2.png', './image3.png'],
  currentIndex: 0,
}

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case NEXT_IMAGE:
	  return Object.assign({}, state, {
		currentIndex: (state.currentIndex + 1) % state.images.length
	  })
    case PREVIOUS_IMAGE:
	  if (state.currentIndex === 0) {
		return Object.assign({}, state, {
		  currentIndex: state.images.length-1
		})
	  }
	  else {
		return Object.assign({}, state, {
		  currentIndex: (state.currentIndex - 1) % state.images.length
		})
	  }
    case GOTO_FIRST_IMAGE:
	  return Object.assign({}, state, {
		currentIndex: 0
	  })
    case GOTO_LAST_IMAGE:
	  return Object.assign({}, state, {
		currentIndex: state.images.length-1
	  })
    case GOTO_IMAGE_AT_INDEX:
	  return Object.assign({}, state, {
		currentIndex: action.index
	  })
    default:
      return state
  }
}
