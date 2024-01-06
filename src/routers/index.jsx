import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import { Root } from "../pages/Root";
// import { ErrorPage } from "../errorPage";

import { Login } from "../pages/Login";
import { Home } from "../pages/Home/index";

// import { HumanResources } from "../pages/HumanResources";
// import { HumanResourcesEmployee } from "../pages/HumanResources/Employee";
// import { HumanResourcesEmployeeRegister } from "../pages/HumanResources/EmployeeRegister";
// import { HumanResourcesEmployeeSheet } from "../pages/HumanResources/EmployeeSheet";
// import { HumanResourcesEmployeeSheetEdit } from "../pages/HumanResources/EmployeeSheetEdit";

import { Admin } from "../pages/Admin";
import { AdminUsers } from "../pages/Admin/User";
import { AdminUserEdit } from "../pages/Admin/UserEdit";
import { AdminUserRegister } from "../pages/Admin/UserRegister";

import { Management } from "../pages/Management";
import { ManagementCenterCost } from "../pages/Management/CenterCost";
import { ManagementContract } from "../pages/Management/Contracts";
import { ManagementContractEdit } from "../pages/Management/ContractEdit";


import { Supply } from "../pages/Supply";
// import { SupplyStock } from "../pages/Supply/Stock";
// import { SupplyWarehouseItems } from "../pages/Supply/Warehouse/Items";
// import { SupplyWarehouseItemEdit } from "../pages/Supply/Warehouse/ItemEdit";
// import { SupplyWarehouseItemRegister } from "../pages/Supply/Warehouse/ItemRegister";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/">
			<Route path="/">
				<Route index element={<Login />} />
				<Route path="login" element={<Login />} />
			</Route>

			<Route element={<Root />}>
				<Route path="home" element={<Home />} />

				<Route path="admin">
					<Route index element={<Admin />} />
					<Route path="users" element={<AdminUsers />} />
					<Route path="user/edit" element={<AdminUserEdit />} />
					<Route path="user/register" element={<AdminUserRegister />} />
				</Route>

				<Route path="management">
					<Route index element={<Management />} />
					<Route path="centers-cost" element={<ManagementCenterCost />} />
					<Route path="contracts" element={<ManagementContract />} />
					<Route path="contract/edit" element={<ManagementContractEdit />} />
				</Route>

				{/* <Route path="rh">
					<Route index element={<HumanResources />} />
					<Route path="employee" element={<HumanResourcesEmployee />} />
					<Route
						path="employee/register"
						element={<HumanResourcesEmployeeRegister />}
					/>
					<Route
						path="employee/sheet/edit"
						element={<HumanResourcesEmployeeSheetEdit />}
					/>

					<Route
						path="employee/sheet"
						element={<HumanResourcesEmployeeSheet />}
					/>
				</Route> */}

				<Route path="supply">
					<Route index element={<Supply />} />
					{/* <Route path="stock" element={<SupplyStock />} />
					<Route path="stock/list" element={<SupplyWarehouseItems />} />
					<Route path="item/edit" element={<SupplyWarehouseItemEdit />} />
					<Route path="item/register" element={<SupplyWarehouseItemRegister />} /> */}
				</Route>
			</Route>
		</Route>
	)
);
