import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./features/menu/menu";
import appDataReducer from "./features/data/appData";

export const store = configureStore({
	reducer: {
        menu: menuReducer,
        appData: appDataReducer
    }
});
