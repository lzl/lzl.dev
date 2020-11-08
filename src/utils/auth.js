import Router from 'next/router'

export const login = async (email, password) => {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })

  if (response.status !== 200) {
    throw new Error(await response.text())
  }

  window.localStorage.setItem('login', Date.now())
  Router.push('/profile')
}

export const logout = async () => {
  await fetch('/api/logout')

  window.localStorage.setItem('logout', Date.now())
  Router.push('/login')
}
