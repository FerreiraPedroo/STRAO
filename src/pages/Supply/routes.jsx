import { Route } from "react-router-dom";

import { Supply } from ".";
// SUPPLY > WAREHOUSE > STOCK (ESTOQUE)
import { SupplyWarehouseStockList } from "./Warehouse/StockList";
import { SupplyWarehouseStock } from "./Warehouse/Stock";
// SUPPLY > WAREHOUSE > SHIPPING (EXPEDIÇÃO)
import { SupplyWarehouseShipping } from "./Warehouse/Shipping";
import { SupplyWarehouseShippingNew } from "./Warehouse/Shipping/ShippingNew";



export const supplyRoutes = (
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
);
