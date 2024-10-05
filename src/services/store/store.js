import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./features/menu/menu";
import appDataReducer from "./features/data/appData";
import actionsReduce from "./features/actions/actions";

export const store = configureStore({
	reducer: {
		menu: menuReducer,
		actions: actionsReduce,
		appData: appDataReducer
	}
});
