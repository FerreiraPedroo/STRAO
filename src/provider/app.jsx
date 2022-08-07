import React, { createContext, useState, useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { loginService } from '../services/login/index'

export const GlobalUseContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [userData, setUserData] = useState('');
  const [configData, setConfigData] = useState();

  const userLogin = async (_user, _password) => {
    const loginReturnData = await loginService(_user, _password);

    if (loginReturnData.codStatus === 200) {
      localStorage.setItem("auth", JSON.stringify(loginReturnData));
      setUserData({ token: loginReturnData.token, user: loginReturnData.user, accessLevel: loginReturnData.accessLevel, });
      return true
    }
    return false
  }

  const handleNewConfigData = (_data)=>{
    setConfigData(_data);
  }

  useEffect(() => {
    const storedData = localStorage.getItem("auth");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, [])

  return (
    <GlobalUseContext.Provider value={{ userData, userLogin, configData, }}>
      {children}
    </GlobalUseContext.Provider>
  )
}