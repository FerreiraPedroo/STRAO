import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import { Root } from "pages/Root";
// import { ErrorPage } from "../errorPage";

import { Login } from "pages/Login";
import { Home } from "pages/Home";

////////////////////////////////////////////////////////////////////////////////////////////
// ADMINISTRATION
import { Admin } from "pages/Admin";
import { AdminCompanyEdit } from "pages/Admin/Company";
import { AdminCompanyList } from "pages/Admin/CompanyList";
import { AdminUsers } from "pages/Admin/User";
import { AdminUserEdit } from "pages/Admin/UserEdit";
import { AdminUserRegister } from "pages/Admin/UserRegister";

////////////////////////////////////////////////////////////////////////////////////////////
// MANAGER
import { Management } from "pages/Management";
import { ManagementCenterCost } from "pages/Management/CenterCost";
import { ManagementCategories } from "pages/Management/Categories";
// import { ManagementContract } from "pages/Management/Contracts";
// import { ManagementContractEdit } from "pages/Management/ContractEdit";

// MANAGER > [SUPPLY] /////////////////////////////////////////////////////////////////////
import { SupplyManagementStock } from "pages/Supply/Management/Warehouse/stocks";
import { SupplyManagementStockEdit } from "pages/Supply/Management/Warehouse/stockEdit";
import { SupplyManagementStockCreate } from "pages/Supply/Management/Warehouse/stockCreate";
import { SupplyManagementItems } from "pages/Supply/Management/Warehouse/items";
import { SupplyManagementItemCreate } from "pages/Supply/Management/Warehouse/itemCreate";
import { SupplyManagementItemEdit } from "pages/Supply/Management/Warehouse/ItemEdit/index";


////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// SUPPLY
import { Supply } from "pages/Supply";
// SUPPLY > WAREHOUSE > STOCK
import { SupplyWarehouseStockList } from "pages/Supply/Warehouse/StockList";
import { SupplyWarehouseStock } from "pages/Supply/Warehouse/Stock";
// SUPPLY > WAREHOUSE > SHIPPING
import { SupplyWarehouseShipping } from "pages/Supply/Warehouse/Shipping";
import { SupplyWarehouseShippingNew } from "pages/Supply/Warehouse/Shipping/ShippingNew";
import { SupplyWarehouseShippingItemRegister } from "pages/Supply/Warehouse/Stock/ItemRegister";


////////////////////////////////////////////////////////////////////////////////////////////
// import { SupplyWarehouseItems } from "pages/Supply/Warehouse/Stock/Items";
// import { SupplyManagementItemCreate } from "pages/Supply/Management/Warehome/itemCreate";
// import { SupplyWarehouseItemEdit } from "pages/Supply/Warehouse/Stock/ItemEdit";
// import { SupplyManagementItem } from "pages/Supply/Management/Warehome/items";
// import { SupplyManagementItemEdit } from "pages/Supply/Management/Warehome/ItemEdit";
////////////////////////////////////////////////////////////////////////////////////////////
// HUMAN RESOURCES
// import { HumanResources } from "../pages/HumanResources";
// import { HumanResourcesEmployee } from "../pages/HumanResources/Employee";
// import { HumanResourcesEmployeeRegister } from "../pages/HumanResources/EmployeeRegister";
// import { HumanResourcesEmployeeSheet } from "../pages/HumanResources/EmployeeSheet";
// import { HumanResourcesEmployeeSheetEdit } from "../pages/HumanResources/EmployeeSheetEdit";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/">
			<Route path="/" element={<Login />} />

			<Route element={<Root />}>
				<Route path="/home" element={<Home />} />

				<Route path="/admin">
					<Route index element={<Admin />} />
					<Route path="users" element={<AdminUsers />} />
					<Route path="user/edit" element={<AdminUserEdit />} />
					<Route path="user/register" element={<AdminUserRegister />} />

					<Route path="companies" element={<AdminCompanyList />} />
					<Route path="company/:id" element={<AdminCompanyEdit />} />
				</Route>

				<Route path="management/" element={<Management/>}>
					{/* <Route index element={<Management />} /> */}
					<Route path="centers-cost" element={<ManagementCenterCost />} />
					<Route path="categories" element={<ManagementCategories />} />
					{/* <Route path="contracts" element={<ManagementContract />} />
					<Route path="contract/edit" element={<ManagementContractEdit />} /> */}

					{/* // INTEGRAÇÃO ENTRE MODULOS */}

					{/* SUPPLY MANAGAMENT //////////////////////////////////////////// */}
					<Route path="warehouse/items" element={<SupplyManagementItems />} />
					<Route path="warehouse/item/new" element={<SupplyManagementItemCreate />} />
					<Route path="warehouse/item/edit" element={<SupplyManagementItemEdit />} />

					<Route path="warehouse/stocks" element={<SupplyManagementStock />} />
					<Route path="warehouse/stock/edit/:id" element={<SupplyManagementStockEdit />} />
					<Route path="warehouse/stock/new" element={<SupplyManagementStockCreate />} />
				</Route>

				<Route path="supply">
					<Route index element={<Supply />} />
					<Route path="warehouse/stocks" element={<SupplyWarehouseStockList />} />
					<Route path="warehouse/stock" element={<SupplyWarehouseStock />} />
					<Route path="warehouse/shipping" element={<SupplyWarehouseShipping />} />
					<Route path="warehouse/shipping/new" element={<SupplyWarehouseShippingNew />} />

					{/* <Route path="stock/items" element={<SupplyWarehouseItems />} /> */}
					{/* <Route path="item/edit" element={<SupplyWarehouseItemEdit />} /> */}
					{/* <Route path="item/register" element={<SupplyWarehouseItemRegister />} /> */}

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
