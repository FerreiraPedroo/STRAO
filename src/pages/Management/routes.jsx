import { Route } from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////////////////
// MANAGER
import { Management } from ".";
import { ManagementCenterCost } from "pages/Management/CenterCost";
import { ManagementItemCategory } from "modules/Supply/pages/Management/Warehouse/ItemCategory";
// import { ManagementContract } from "pages/Management/Contracts";
// import { ManagementContractEdit } from "pages/Management/ContractEdit";

// MANAGER > SUPPLY /////////////////////////////////////////////////////////////////////
import { SupplyManagementStock } from "modules/Supply/pages/Management/Warehouse/stock/stockList";
import { SupplyManagementStockEdit } from "modules/Supply/pages/Management/Warehouse/stock/stockEdit";
import { SupplyManagementStockCreate } from "modules/Supply/pages/Management/Warehouse/stock/stockCreate";
import { SupplyManagementItems } from "modules/Supply/pages/Management/Warehouse/item/itemList";
import { SupplyManagementItemCreate } from "modules/Supply/pages/Management/Warehouse/item/itemCreate";
import { SupplyManagementItemEdit } from "modules/Supply/pages/Management/Warehouse/item/ItemEdit/index";

export const managementRoutes = (
	<Route path="management" element={<Management />} >
		{/* <Route index element={<Management />} /> */}
		<Route path="centers-cost" element={<ManagementCenterCost />} />
		<Route path="item-category" element={<ManagementItemCategory />} />
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
