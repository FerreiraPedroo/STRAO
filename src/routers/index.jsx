import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { GlobalUseContext } from '../provider/app';
import { NavBar } from "../component/NavBar";
import { Notification } from "../component/Notification";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { EmployeeRegister } from "../pages/RecursosHumanos/EmployeeRegister";
import { EmployeeVacation } from "../pages/RecursosHumanos/EmployeeVacation";
import { EmployeeSheet } from "../pages/RecursosHumanos/EmployeeSheet";
import { SheetEdit } from "../pages/RecursosHumanos/EmployeeSheet/SheetEdit";
import { EmployeeList } from "../pages/RecursosHumanos/EmployeeList";


export const AppRouter = () => {
  const { userData } = useContext(GlobalUseContext)

  const PrivateRoutes = ({ children }) => {
    if (userData) {
      return (<>
        <NavBar />
        <Notification />
        {children}
      </>)
    } else {
      return (<Navigate to="/" />)
    }
  }

  const PublicRoutes = ({ children }) => {
    if (userData) {
      return (<Navigate to="/home" />)
    } else {
      return (children)
    }
  }

  return (
    <Routes>
      <Route path="/home" element={
        <PrivateRoutes>
          <Home />
        </PrivateRoutes>
      } />
      <Route path="/" element={
        <PublicRoutes>
          <Login />
        </PublicRoutes>
      } />

      {/* RH */}
      <Route path="/rh/register/employee" element={
        <PrivateRoutes>
          <EmployeeRegister />
        </PrivateRoutes>
      } />
      <Route path="/rh/list/employee" element={
        <PrivateRoutes>
          <EmployeeList />
        </PrivateRoutes>
      } />
      <Route path="/rh/sheet" element={
        <PrivateRoutes>
          <EmployeeSheet />
        </PrivateRoutes>
      } />
      <Route path="/rh/sheet/edit" element={
        <PrivateRoutes>
          <SheetEdit />
        </PrivateRoutes>
      } />
      <Route path="/rh/vacation" element={
        <PrivateRoutes>
          <EmployeeVacation />
        </PrivateRoutes>
      } />







    </Routes>
  )

} 