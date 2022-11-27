import React, { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [appLoading, setAppLoading] = useState(true);

    const [userToken, setUserToken] = useState();
    const [userData, setUserData] = useState();
    const [userDataVersion, setUserDataVersion] = useState();

    const handleContext = {
        newLoginData: (_data) => {
            setUserToken(_data.token);
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

        verifyTokenPresence: () => {
            const verifyToken = localStorage.getItem("strao-token");
            return !verifyToken
        }
    };

    useEffect(() => {
        let storedToken = localStorage.getItem("strao-token");
        let storedDataVersion = localStorage.getItem("strao-user-data-version");
        let storedData;

        try {
            storedData = JSON.parse(localStorage.getItem("strao-user-data"));
        } catch (err) {
            storedData = null;
        }

        if (!storedToken || !storedData || !storedDataVersion) {
            localStorage.removeItem("strao-token");
            localStorage.removeItem("strao-user-data-version");
            localStorage.removeItem("strao-user-data");
            setUserToken("");
            setUserDataVersion("");
            setUserData({});
        }

        if (storedToken && storedData && storedDataVersion) {
            setUserToken(storedToken);
            setUserDataVersion(storedDataVersion);
            setUserData(storedData);
        }
    }, []);

    return (
        <GlobalContext.Provider
            value={{
                handleContext,
                userToken,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
