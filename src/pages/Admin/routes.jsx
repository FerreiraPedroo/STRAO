import { Route } from "react-router-dom";

import { Admin } from "pages/Admin";
import { AdminBranchEdit } from "pages/Admin/Branch";
import { AdminBranchList } from "pages/Admin/BranchList";
import { AdminUsers } from "pages/Admin/User/UserList";
import { AdminUserEdit } from "pages/Admin/User/UserEdit";
import { AdminUserRegister } from "pages/Admin/User/UserRegister";

export const adminRoutes = (
	<Route path="/admin">
		<Route index element={<Admin />} />
		<Route path="users" element={<AdminUsers />} />
		<Route path="user/edit" element={<AdminUserEdit />} />
		<Route path="user/register" element={<AdminUserRegister />} />

		<Route path="branchs" element={<AdminBranchList />} />
		<Route path="branch/:id" element={<AdminBranchEdit />} />
	</Route>
);
