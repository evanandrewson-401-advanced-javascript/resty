const goFetch = (url, method, body) => {
  return fetch(url, {
    method, 
    body
  })
    .then(res => res.json())
}

export default goFetch;