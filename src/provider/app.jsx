import React, { createContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { loginService } from "../services/login/index";

export const GlobalUseContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [configData, setConfigData] = useState();

  const userLogin = async (_user, _password) => {
    const loginReturnData = await loginService(_user, _password);

    if (loginReturnData.codStatus === 200) {
      localStorage.setItem("strao-token", loginReturnData.token);
      localStorage.setItem("strao-data", JSON.stringify(loginReturnData));
      setUserData({
        token: loginReturnData.token,
        userName: loginReturnData.userName,
        data: loginReturnData.userData,
      });
    }

    return loginReturnData;
  };

  const handleNewConfigData = (_data) => {
    setConfigData(_data);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("strao-token");
    const storedData = JSON.parse(localStorage.getItem("strao-data"));

    if (storedToken && storedData) {
      setUserData(storedData);
    }
  }, []);

  return (
    <GlobalUseContext.Provider value={{ userData, userLogin, configData }}>
      {children}
    </GlobalUseContext.Provider>
  );
};
