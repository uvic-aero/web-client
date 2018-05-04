export const SET_FILTER = "SET_FILTER";
export const SET_BROWSER_LOADING = "SET_BROWSER_LOADING";

export function setFilter(filter, active) {
  return { type: SET_FILTER, filter, active };
}

export function setBrowserLoading(loading) {
  return { type: SET_BROWSER_LOADING, loading };
}
