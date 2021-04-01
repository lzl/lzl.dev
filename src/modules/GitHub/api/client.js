const API_PATH = 'https://api.github.com'
const AUTH_KEY = 'authToken'

export default async function GithubClient(
  endpoint,
  { body, ...customConfig } = {}
) {
  const authToken = window.localStorage.getItem(AUTH_KEY)
  const headers = {
    'content-type': 'application/json',
    Accept: 'application/vnd.github.v3+json',
  }
  if (authToken) {
    headers.Authorization = `Bearer ${authToken}`
  }
  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }
  if (body) {
    config.body = JSON.stringify(body)
  }

  try {
    const response = await fetch(`${API_PATH}/${endpoint}`, config)
    if (response.status === 401) {
      localStorage.removeItem(AUTH_KEY)
      window.location.assign(window.location)
      return
    }
    if (response.ok) {
      const json = await response.json()
      return json
    } else {
      const errorMessage = await response.text()
      throw new Error(errorMessage)
    }
  } catch (error) {
    console.log('GithubClient error:', error.message)
    throw new Error(error)
  }
}
