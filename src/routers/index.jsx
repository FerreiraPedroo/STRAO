import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import { Root } from "pages/Root";
// import { ErrorPage } from "../errorPage";

import { Login } from "pages/Login";
import { Home } from "pages/Home";

////////////////////////////////////////////////////////////////////////////////////////////
import { adminRoutes } from "pages/Admin/routes";
import { supplyRoutes } from "modules/Supply/routes.jsx";
import { managementRoutes } from "pages/Management/routes";
import { personRoutes } from "modules/Persons/routes";


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

				{adminRoutes}

				{managementRoutes}

				{personRoutes}


				{/* {supplyRoutes} */}
			</Route>
		</Route>
	)
);
