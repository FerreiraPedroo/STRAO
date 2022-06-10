import React, { createContext, useState, useContext, useEffect } from 'react';
// import jsonwebtoken from 'jsonwebtoken';
import { Navigate } from 'react-router-dom';

import { loginService } from '../services/login/index'

const AppUseContext = createContext({});

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState('')

  const userLogin = async (_user, _password) => {
    const loginReturnData = await loginService(_user, _password)
    console.log(loginReturnData)
    if (loginReturnData.codStatus === 200) {
      localStorage.setItem("auth", JSON.stringify({ token: loginReturnData.token, user: loginReturnData.user, accessLevel: loginReturnData.accessLevel, }))
      setUser({ token: loginReturnData.token, user: loginReturnData.user, accessLevel: loginReturnData.accessLevel, })
      return true
    }
    return (false)
  }

  useEffect(() => {
    const storedToken = localStorage.getItem("auth")
    if (storedToken) {
      setUser(JSON.parse(storedToken))
    }
  }, [])

  return (
    <AppUseContext.Provider value={{ user, userLogin }}>
      {children}
    </AppUseContext.Provider>
  )
}

export const AppContext = () => {
  const context = useContext(AppUseContext)
  return context
}
