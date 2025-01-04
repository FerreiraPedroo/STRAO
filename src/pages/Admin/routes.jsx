import { Route } from "react-router-dom";

import { Admin } from "pages/Admin";
import { AdminCompanyEdit } from "pages/Admin/Company";
import { AdminCompanyList } from "pages/Admin/CompanyList";
import { AdminUsers } from "pages/Admin/User";
import { AdminUserEdit } from "pages/Admin/UserEdit";
import { AdminUserRegister } from "pages/Admin/UserRegister";

export const adminRoutes = (
	<Route path="/admin">
		<Route index element={<Admin />} />
		<Route path="users" element={<AdminUsers />} />
		<Route path="user/edit" element={<AdminUserEdit />} />
		<Route path="user/register" element={<AdminUserRegister />} />

		<Route path="companies" element={<AdminCompanyList />} />
		<Route path="company/:id" element={<AdminCompanyEdit />} />
	</Route>
);
