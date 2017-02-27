export const NEXT_IMAGE = 'NEXT_IMAGE';
export const PREVIOUS_IMAGE = 'PREVIOUS_IMAGE';
export const GOTO_FIRST_IMAGE = 'GOTO_FIRST_IMAGE';
export const GOTO_LAST_IMAGE = 'GOTO_LAST_IMAGE';
export const GOTO_IMAGE_AT_INDEX = 'GOTO_IMAGE_AT_INDEX';

export function nextImage() {
  return { type: NEXT_IMAGE }
};

export function previousImage() {
  return { type: PREVIOUS_IMAGE }
};

export function gotoFirstImage(mode) {
  return { type: GOTO_FIRST_IMAGE, mode }
};

export function gotoLastImage() {
  return { type: GOTO_LAST_IMAGE }
};

export function gotoImageAtIndex(i) {
  return { type: GOTO_IMAGE_AT_INDEX, index: i }
};
