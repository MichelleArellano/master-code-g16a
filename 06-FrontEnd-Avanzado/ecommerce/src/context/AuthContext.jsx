import { createContext, useState, useEffect } from 'react'
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'

export const AuthContext = createContext()

export function AuthProvider (props) {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState(null)

  const loginUser = (token) => {
    window.localStorage.setItem('token', token)
    const decoded = jwt_decode(token)
    setUser(decoded)
    setIsAuth(true)
  }

  const logout = () => {
    window.localStorage.removeItem('token')
    setIsAuth(false)
    setUser(null)
  }

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      const decoded = jwt_decode(token)
      setUser(decoded)
      setIsAuth(true)
    }
  }, [])

  const values = {
    isAuth,
    user,
    loginUser,
    logout
  }

  return (
    <AuthContext.Provider value={values}>
      {props.children}
    </AuthContext.Provider>
  )
}
