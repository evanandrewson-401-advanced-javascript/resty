const goFetch = (url, method, body) => {
  if(method === 'get' || method === 'delete') {
    return fetch(url, {
      method
    })
      .then(res => res.json())
  } else {
    return fetch(url, {
      method,
      body
    })
      .then(res => res.json())
  }
}

export default goFetch;