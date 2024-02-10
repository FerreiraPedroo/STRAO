import React from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route
} from "react-router-dom";

import { Root } from "pages/Root";
// import { ErrorPage } from "../errorPage";

import { Login } from "pages/Login";
import { Home } from "pages/Home";

// import { HumanResources } from "../pages/HumanResources";
// import { HumanResourcesEmployee } from "../pages/HumanResources/Employee";
// import { HumanResourcesEmployeeRegister } from "../pages/HumanResources/EmployeeRegister";
// import { HumanResourcesEmployeeSheet } from "../pages/HumanResources/EmployeeSheet";
// import { HumanResourcesEmployeeSheetEdit } from "../pages/HumanResources/EmployeeSheetEdit";

import { Admin } from "pages/Admin";
import { AdminUsers } from "pages/Admin/User";
import { AdminUserEdit } from "pages/Admin/UserEdit";
import { AdminUserRegister } from "pages/Admin/UserRegister";

//

import { Management } from "pages/Management";
import { ManagementCenterCost } from "pages/Management/CenterCost";
import { ManagementContract } from "pages/Management/Contracts";
import { ManagementContractEdit } from "pages/Management/ContractEdit";
// INTEGRAÇÃO SUPPLY
import { ManagementStock } from "pages/Management/Stocks";
import { ManagementStockEdit } from "pages/Management/StockEdit";
import { ManagementItem } from "pages/Management/Item";
import { ManagementItemEdit } from "pages/Management/ItemEdit";

//

import { Supply } from "pages/Supply";
import { SupplyWarehouseReceipt } from "pages/Supply/Warehouse/Receipt";
import { SupplyWarehouseStock } from "pages/Supply/Warehouse/Stock";
import { SupplyWarehouseItems } from "pages/Supply/Warehouse/Stock/Items";
import { SupplyWarehouseItemEdit } from "pages/Supply/Warehouse/Stock/ItemEdit";
import { SupplyWarehouseItemRegister } from "pages/Supply/Warehouse/Stock/ItemRegister";
import { SupplyWarehouseStockList } from "pages/Supply/Warehouse/StockList";

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

					{/* // INTEGRAÇÃO ENTRE MODULOS */}
					<Route path="warehouse/items" element={<ManagementItem />} />
					<Route path="warehouse/item/edit" element={<ManagementItemEdit />} />

					<Route path="warehouse/stocks" element={<ManagementStock />} />
					<Route
						path="warehouse/stock/edit"
						element={<ManagementStockEdit />}
					/>
				</Route>

				<Route path="supply">
					<Route index element={<Supply />} />
					<Route
						path="warehouse/stocks"
						element={<SupplyWarehouseStockList />}
					/>
					<Route path="warehouse/stock" element={<SupplyWarehouseStock />} />

					<Route
						path="warehouse/receipt"
						element={<SupplyWarehouseReceipt />}
					/>

					{/* <Route path="stock/items" element={<SupplyWarehouseItems />} />
					<Route path="item/edit" element={<SupplyWarehouseItemEdit />} />
					<Route path="item/register" element={<SupplyWarehouseItemRegister />} /> */}

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
				</Route>
			</Route>
		</Route>
	)
);
