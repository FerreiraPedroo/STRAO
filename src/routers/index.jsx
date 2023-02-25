import React from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route
} from "react-router-dom";

import { Root } from "../pages/Root";
import { ErrorPage } from "../errorPage";

import { Login } from "../pages/Login";
import { Home } from "../pages/Home/index";

import { HumanResources } from "../pages/HumanResources";
import { HumanResourcesEmployeeRegister } from "../pages/HumanResources/EmployeeRegister";
import { HumanResourcesEmployeeList } from "../pages/HumanResources/EmployeeList";

import { Admin } from "../pages/Admin";
import { AdminUserList } from "../pages/Admin/UserList";
import { AdminUserEdit } from "../pages/Admin/UserEdit";
import { AdminUserRegister } from "../pages/Admin/UserRegister";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/">
			<Route path="/">
				<Route index element={<Login />} />
				<Route path="login" element={<Login />} />
			</Route>

			<Route element={<Root />}>
				<Route path="home" element={<Home />} />

				<Route path="rh">
					<Route index element={<HumanResources />} />
					<Route path="employee/register" element={<HumanResourcesEmployeeRegister />} />
					<Route path="employee/all" element={<HumanResourcesEmployeeList />} />
				</Route>

				<Route path="admin">
					<Route index element={<Admin />} />
					<Route path="user/list" element={<AdminUserList />} />
					<Route path="user/edit" element={<AdminUserEdit />} />
					<Route path="user/register" element={<AdminUserRegister />} />
				</Route>
			</Route>
		</Route>
	)
);
