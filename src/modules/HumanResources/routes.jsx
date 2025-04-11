import { Route } from "react-router-dom";
import { HumanResources } from ".";
////////////////////////////////////////////////////////////////////////////////////////////
// MANAGER

export const humanResourcesRoutes = (
    <Route path="rh" element={<HumanResources />} >
        {/* <Route path="centers-cost" element={<ManagementCenterCost />} />
        <Route path="item-category" element={<ManagementItemCategory />} /> */}

    </Route>
);
