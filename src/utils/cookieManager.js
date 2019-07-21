export function getCookie (name) {
  var value = '; ' + document.cookie
  var parts = value.split('; ' + name + '=')
  if (parts.length === 2) return parts.pop().split(';').shift()
}

export function setCookie (name, value, expiration) {
  const date = new Date()
  date.setTime(date.getTime() + expiration * 24 * 60 * 60 * 1000)
  const data = `${name}=${window.encodeURIComponent(value)}`
  const expires = `expires=${date.toGMTString()}`

  document.cookie = `${data};${expires};path=/;`
}
