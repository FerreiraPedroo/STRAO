import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "../component/NavBar";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login"
import { AppUseContext } from '../provider/app'

export const AppRouter = () => {
  const { user } = AppUseContext();


  const PrivateRoutes = ({ children }) => {
    if (user) {
      return <>
        <NavBar />
        {children}
      </>
    }
  }

  const PublicRoutes = ({ children }) => {
    if (!user) {
      return children
    }
  }
  console.log(user)
  return (
    <page-container>
      <Routes>

        <Route path="/" element={
          <>
            <PrivateRoutes>
              <Home />
            </PrivateRoutes>
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          </>
        } />


      </Routes>
    </page-container>
  )

} 