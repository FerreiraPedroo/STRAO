import React, { createContext, useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { loginService } from "../services/login/index";

export const GlobalUseContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [configData, setConfigData] = useState();

  const userLogin = async (_user, _password) => {
    const loginReturnData = await loginService(_user, _password);

    if (loginReturnData.codStatus === 200) {
      localStorage.setItem("token", JSON.stringify(loginReturnData));
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
    // const storedData = JSON.parse(localStorage.getItem("auth")) | [];
    // storedData.contracts = [
    //   {
    //     name: "Ministério da Educação",
    //     centerCosts: ["01-00001", "01-00002", "01-00003", "01-00004"],
    //     jobs: ["Professor", "Merendeira", "Diretora Adjunta"],
    //   },
    //   {
    //     name: "Ministério da Econômia",
    //     centerCosts: ["02-00001", "02-00002"],
    //     jobs: ["Gerente", "Diretor", "CEO"],
    //   },
    //   {
    //     name: "Ministério da Defesa",
    //     centerCosts: ["03-00011", "03-00012"],
    //     jobs: ["Auxiliar", "Assistente"],
    //   },
    // ];
    // if (storedData) {
    //   setUserData(storedData);
    // }
  }, []);

  return (
    <GlobalUseContext.Provider value={{ userData, userLogin, configData }}>
      {children}
    </GlobalUseContext.Provider>
  );
};
