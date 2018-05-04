export const SET_FILTER_UNTAGGED = "SET_FILTER_UNTAGGED";
export const SET_BROWSER_LOADING = "SET_BROWSER_LOADING";

export function setShowUntagged(filter) {
  return { type: SET_FILTER_UNTAGGED, filter };
}

export function setBrowserLoading(loading) {
  return { type: SET_BROWSER_LOADING, loading };
}
