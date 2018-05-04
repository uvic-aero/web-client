export const NEXT_IMAGE = "NEXT_IMAGE";
export const PREVIOUS_IMAGE = "PREVIOUS_IMAGE";
export const GOTO_FIRST_IMAGE = "GOTO_FIRST_IMAGE";
export const GOTO_LAST_IMAGE = "GOTO_LAST_IMAGE";
export const GOTO_IMAGE_AT_INDEX = "GOTO_IMAGE_AT_INDEX";
export const SET_QUEUE_AUTOSCROLL = "SET_QUEUE_AUTOSCROLL";

export function nextImage(images) {
  return { type: NEXT_IMAGE, images };
}

export function previousImage(images) {
  return { type: PREVIOUS_IMAGE, images };
}

export function gotoFirstImage(mode) {
  return { type: GOTO_FIRST_IMAGE, mode };
}

export function gotoLastImage(images) {
  return { type: GOTO_LAST_IMAGE, images };
}

export function gotoImageAtIndex(i) {
  return { type: GOTO_IMAGE_AT_INDEX, index: i };
}

export function setQueueAutoscroll(scroll) {
  return { type: SET_QUEUE_AUTOSCROLL, scroll };
}
