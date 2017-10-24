export const SET_FILTER_UNTAGGED = "SET_FILTER_UNTAGGED";

export function setShowUntagged(filter) {
  return { type: SET_FILTER_UNTAGGED, filter };
}
