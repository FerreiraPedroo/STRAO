import { Route } from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////////////////
// MANAGER
import { Management } from ".";
import { ManagementCenterCost } from "pages/Management/CenterCost";
import { ManagementCategories } from "pages/Management/Categories";
// import { ManagementContract } from "pages/Management/Contracts";
// import { ManagementContractEdit } from "pages/Management/ContractEdit";

// MANAGER > SUPPLY /////////////////////////////////////////////////////////////////////
import { SupplyManagementStock } from "pages/Supply/Management/Warehouse/stocks";
import { SupplyManagementStockEdit } from "pages/Supply/Management/Warehouse/stockEdit";
import { SupplyManagementStockCreate } from "pages/Supply/Management/Warehouse/stockCreate";
import { SupplyManagementItems } from "pages/Supply/Management/Warehouse/items";
import { SupplyManagementItemCreate } from "pages/Supply/Management/Warehouse/itemCreate";
import { SupplyManagementItemEdit } from "pages/Supply/Management/Warehouse/ItemEdit/index";

export const managementRoutes = (
	<Route path="management">
		<Route index element={<Management />} />
		<Route path="centers-cost" element={<ManagementCenterCost />} />
		<Route path="categories" element={<ManagementCategories />} />
		{/* <Route path="contracts" element={<ManagementContract />} /> */}
		{/* <Route path="contract/edit" element={<ManagementContractEdit />} /> */}

		{/*
         //
         // INTEGRAÇÃO ENTRE MODULOS 
         //
        */}

		{/* SUPPLY MANAGAMENT //////////////////////////////////////////// */}
		<Route path="warehouse/items" element={<SupplyManagementItems />} />
		<Route path="warehouse/item/new" element={<SupplyManagementItemCreate />} />
		<Route path="warehouse/item/edit" element={<SupplyManagementItemEdit />} />

		<Route path="warehouse/stocks" element={<SupplyManagementStock />} />
		<Route path="warehouse/stock/edit/:id" element={<SupplyManagementStockEdit />} />
		<Route path="warehouse/stock/new" element={<SupplyManagementStockCreate />} />
	</Route>
);
