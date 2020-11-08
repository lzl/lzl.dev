import { useEffect } from 'react'
import Router from 'next/router'

const auth = (event) => {
  if (event.key === 'login') {
    Router.push('/profile')
  }
  if (event.key === 'logout') {
    Router.push('/login')
  }
}

export default function useAuth() {
  useEffect(() => {
    window.addEventListener('storage', auth)

    return () => {
      window.removeEventListener('storage', auth)
      window.localStorage.removeItem('login')
      window.localStorage.removeItem('logout')
    }
  }, [])
}
