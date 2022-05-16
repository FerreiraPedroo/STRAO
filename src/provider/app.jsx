import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState()

  const userLogin = () => {
    setUser({
      token: "3ed84ff8a63c27b05de62fa9e8",
      user: "mastermaker1@gmail.com",
      auth: true,
      avatar: "../../assets/img/home-bg2.png"
    })
    
    localStorage.setItem("auth", JSON.stringify({ token: "3ed84ff8a63c27b05de62fa9e8", user: "mastermaker1@gmail.com", auth: true, avatar: "../../assets/img/home-bg2.png" }))
    return <Navigate to="/home" />
  }

  useEffect(() => {
    const storedToken = localStorage.getItem("auth")
    if (storedToken) {
      setUser(JSON.parse(storedToken))
    }
  }, [])

  return (
    <AppContext.Provider value={{ user, userLogin }}>
      {children}
    </AppContext.Provider>
  )
}

export const AppUseContext = () => useContext(AppContext)
