import "whatwg-fetch";

// API url on the GroundStation
const Endpoint = "http://127.0.0.1:24002";
const obcEndpoint = "http://localhost:1600";

function post(url, body = {}, options = {}) {
  const payload = typeof body === "string" ? body : JSON.stringify(body);

  return fetch(`${Endpoint}${url}`, {
    method: "POST",
    body: payload,
    headers: {
      "content-type": "application/json"
    },
    ...options
  }).then(res => res.json());
}

function get(url, options = {}) {
  return fetch(`${Endpoint}${url}`, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    },
    ...options
  }).then(res => res.json());
}

function getService(command, application, options = {}) {
	console.log(`${obcEndpoint}${command}${application}`);
  return fetch(`${obcEndpoint}${command}${application}`, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    },
    ...options
  }).then(res => res.json());
}
//Functions used for service calls to obc.
export function getStatus(application){
	return getService("/status", `${application}`);
}
export function getStart(application){
	return getService("/start", `${application}`);
}
export function getStop(application){
	return getService("/stop", `${application}`);
}
// retrieve map markers for broken solar panels
export function getMarkers() {
  return get("/markers");
}

// Tell the onboard computer to capture a still image during liveview playback
export function captureStill() {
  return get("/camera/still");
}

export function zoomIn() {
  return get("/camera/zoomin");
}

export function zoomOut() {
  return get("/camera/zoomout");
}

export function getMode() {
  return get("/camera/mode");
}

export function setMode(mode) {
  return post("/camera/mode", { wanted: mode });
}

export function tagImage(id) {
  return post(`/images/${id}/tag`, {});
}

export function unTagImage(id) {
  return post(`/images/${id}/untag`, {});
}
