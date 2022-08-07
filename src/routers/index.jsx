import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { GlobalUseContext } from '../provider/app';
import { NavBar } from "../component/NavBar";
import { Notification } from "../component/Notification";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

import { RhHome } from "../pages/RecursosHumanos";
import { RhEmployeeList } from "../pages/RecursosHumanos/EmployeeList";
import { RhEmployeeSheet } from "../pages/RecursosHumanos/EmployeeSheet";
import { RhEmployeeRegister } from "../pages/RecursosHumanos/EmployeeRegister";
import { RhEmployeeVacation } from "../pages/RecursosHumanos/EmployeeVacation";

import { Admin } from "../pages/Admin";
import { AdminUserRegister } from "../pages/Admin/UserRegister";
import { AdminUserList } from "../pages/Admin/UserList";


export const AppRouter = () => {
  const { userData } = useContext(GlobalUseContext);

  const PrivateRoutes = ({ children }) => {
    if (userData) {
      return (
        children
      )
    } else {
      return (<Navigate to="/" />);
    }
  }

  const PublicRoutes = ({ children }) => {
    if (userData) {
      return (<Navigate to="/home" />);
    } else {
      return (children);
    }
  }

  return (
    <>
      {userData &&
        (<NavBar />)
      }

      <Routes>
        <Route path="/" element={
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        } />
        <Route path="/home" element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        } />

        {/* ADMINISTRAÇÃO */}
        <Route path="/admin" element={
          <PrivateRoutes>
            <Admin />
          </PrivateRoutes>
        } />
        <Route path="/admin/user/register" element={
          <PrivateRoutes>
            <AdminUserRegister />
          </PrivateRoutes>
        } />
        <Route path="/admin/user/list" element={
          <PrivateRoutes>
            <AdminUserList />
          </PrivateRoutes>
        } />

        {/* RH */}
        <Route path="/rh" element={
          <PrivateRoutes>
            <RhHome />
          </PrivateRoutes>
        } />
        <Route path="/rh/employee/register" element={
          <PrivateRoutes>
            <RhEmployeeRegister />
          </PrivateRoutes>
        } />
        <Route path="/rh/employee/list" element={
          <PrivateRoutes>
            <RhEmployeeList />
          </PrivateRoutes>
        } />
        <Route path="/rh/sheet" element={
          <PrivateRoutes>
            <RhEmployeeSheet />
          </PrivateRoutes>
        } />
        <Route path="/rh/vacation" element={
          <PrivateRoutes>
            <RhEmployeeVacation />
          </PrivateRoutes>
        } />

      </Routes>
    </>
  )

} 