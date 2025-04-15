import { Route } from "react-router-dom";
import { Persons } from ".";
import { PersonNew } from "modules/Persons/Person/PersonNew";

////////////////////////////////////////////////////////////////////////////////////////////
// MANAGER

export const personRoutes = (
	<Route path="persons">
		<Route index element={<Persons />} />
		<Route path="person" element={<PersonNew />} />
	</Route>
);
