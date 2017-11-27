export function get(request, prefix = '/api/') {
  return fetch(prefix + request)
    .then(res => res.json())
    .catch(error => {
      console.error(error);
    });
}

export function fetchSets() {
  return get('sets/').then(res => res.objects || []);
}

export function fetchSet(uid) {
  return get(`sets/${uid}/`);
}

export function fetchSetContent(uid) {
  return get(`sets/${uid}/items/`);
}

export function fetchEpisode(uid) {
  return get(`episodes/${uid}/`);
}

export function fetchImage(imageUrl) {
  return get('', imageUrl);
}
