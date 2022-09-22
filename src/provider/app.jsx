import React, { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { loginService, logoutService } from "../services/login/index";

export const GlobalUseContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [userTokenData, setUserTokenData] = useState();
  const [userDataVersion, setUserDataVersion] = useState();
  const [userData, setUserData] = useState(
    'JSON.parse(localStorage.getItem("strao-user-data"))'
  );
  const { pathname: pageName } = useLocation();

  const userLogin = async (_user, _password) => {
    const data = await loginService(_user, _password, userDataVersion);
    if (data.codStatus === 200) {
      handleContext.newLoginData(data);
    }
    return data;
  };

  const userLogout = async () => {
    const data = await logoutService();
    if (data.codStatus === 200) {
      handleContext.removeLoginData();
      return true;
    }
    return data;
  };

  const handleContext = {
    newLoginData: (_data) => {
      setUserTokenData(_data.token);
      setUserData(_data.userData);
      setUserDataVersion(_data.dataVersion);
      localStorage.setItem("strao-token", _data.token);
      localStorage.setItem("strao-user-data", JSON.stringify(_data.userData));
      localStorage.setItem("strao-user-data-version", _data.dataVersion);
    },

    removeLoginData: () => {
      localStorage.removeItem("strao-token");
      localStorage.removeItem("strao-user-data");
      localStorage.removeItem("strao-user-data-version");
      setUserTokenData("");
      setUserDataVersion("");
      setUserData("");
    },

    checkUserDataVersion: (_version) => {
      if (userDataVersion === _version) {
        return true;
      }
      return false;
    },
  };

  useEffect(() => {
    let storedToken = localStorage.getItem("strao-token");
    let storedDataVersion = localStorage.getItem("strao-user-data-version");
    let storedData;

    try {
      storedData = JSON.parse(localStorage.getItem("strao-user-data"));
    } catch (err) {
      storedData = false;
    }

    if (storedToken && storedData) {
      setUserTokenData(storedToken);
      setUserDataVersion(storedDataVersion);
      setUserData(storedData);
    }
  }, []);

  return (
    <GlobalUseContext.Provider
      value={{
        userLogin,
        userLogout,
        userTokenData,
        userData,
        handleContext,
        pageName,
      }}
    >
      {children}
    </GlobalUseContext.Provider>
  );
};
