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

import { Supply } from "../pages/Supply";
import { SupplyWarehouseItems } from "../pages/Supply/Warehouse/Items";
import { SupplyWarehouseItemEdit } from "../pages/Supply/Warehouse/ItemEdit";
import { SupplyWarehouseItemRegister } from "../pages/Supply/Warehouse/ItemRegister";
import { SectorIndex } from "../component/Sector/index";
import { HumanResourcesEmployeeSheet } from "../pages/HumanResources/EmployeeSheet";
import { HumanResourcesEmployeeSheetEdit } from "../pages/HumanResources/EmployeeSheetEdit";

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
					<Route path="employee" element={<SectorIndex />} />
					<Route
						path="employee/register"
						element={<HumanResourcesEmployeeRegister />}
					/>
					<Route
						path="employee/list"
						element={<HumanResourcesEmployeeList />}
					/>
					<Route
						path="employee/sheet"
						element={<HumanResourcesEmployeeSheet />}
					/>
					<Route
						path="employee/sheet/edit"
						element={<HumanResourcesEmployeeSheetEdit />}
					/>
				</Route>

				<Route path="admin">
					<Route index element={<Admin />} />
					<Route path="user" element={<SectorIndex />} />
					<Route path="user/list" element={<AdminUserList />} />
					<Route path="user/edit" element={<AdminUserEdit />} />
					<Route path="user/register" element={<AdminUserRegister />} />

					<Route path="centerscost" element={<SectorIndex />} />
					<Route path="contract" element={<SectorIndex />} />
				</Route>

				<Route path="supply">
					<Route index element={<Supply />} />
					<Route path="warehouse/items" element={<SupplyWarehouseItems />} />
					<Route
						path="warehouse/item/edit"
						element={<SupplyWarehouseItemEdit />}
					/>
					<Route
						path="warehouse/item/register"
						element={<SupplyWarehouseItemRegister />}
					/>
				</Route>
			</Route>
		</Route>
	)
);
