import React from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route
} from "react-router-dom";

import { Root } from "../pages/Root";
import { Login } from "../pages/Login";
import { ErrorPage } from "../errorPage";
import { Admin } from "../pages/Admin";

import { Home } from "../pages/Home/index";
import { HumanResources } from "../pages/HumanResources";
import { HumanResourcesEmployeeRegister } from "../pages/HumanResources/EmployeeRegister";

import { AdminUserList } from "../pages/Admin/UserList";
import { AdminUserRegister } from "../pages/Admin/UserRegister";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/">
				<Route index element={<Login />} />
				<Route path="login" element={<Login />} />
			</Route>
			<Route element={<Root />}>
				<Route path="home" element={<Home />} />

				<Route path="rh">
					<Route index element={<HumanResources />} />
					<Route
						path="employee/register"
						element={<HumanResourcesEmployeeRegister />}
					/>
				</Route>

				<Route path="admin">
					<Route index element={<Admin />} />
					<Route path="user/register" element={<AdminUserRegister />} />
					<Route path="user/list" element={<AdminUserList />} />
				</Route>
			</Route>
		</Route>
	)
);
