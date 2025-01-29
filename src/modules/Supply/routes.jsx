import { Route } from "react-router-dom";

import { Supply } from ".";
// SUPPLY > WAREHOUSE > STOCK (ESTOQUE)
import { SupplyWarehouseStockList } from "./pages/Warehouse/StockList";
import { SupplyWarehouseStock } from "./pages/Warehouse/Stock";
// SUPPLY > WAREHOUSE > SHIPPING (EXPEDIÇÃO)
import { SupplyWarehouseShipping } from "./pages/Warehouse/Shipping";
import { SupplyWarehouseShippingNew } from "./pages/Warehouse/Shipping/ShippingNew";
// SUPPLY > SUPPLIER
import { SupplySupplierList } from "./pages/Supplier/SupplierList";
import { SupplySupplierNew } from "./pages/Supplier/SupplierNew";



export const supplyRoutes = (
	<Route path="supply">
		<Route index element={<Supply />} />
		<Route path="warehouse/stocks" element={<SupplyWarehouseStockList />} />
		<Route path="warehouse/stock" element={<SupplyWarehouseStock />} />
		<Route path="warehouse/shipping" element={<SupplyWarehouseShipping />} />
		<Route path="warehouse/shipping/new" element={<SupplyWarehouseShippingNew />} />
		<Route path="suppliers" element={<SupplySupplierList />} />
		<Route path="supplier/new" element={<SupplySupplierNew />} />

		{/* <Route path="stock/items" element={<SupplyWarehouseItems />} /> */}
		{/* <Route path="item/edit" element={<SupplyWarehouseItemEdit />} /> */}
		{/* <Route path="item/register" element={<SupplyWarehouseItemRegister />} /> */}

	</Route>
);
