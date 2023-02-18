import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { GlobalProvider } from "./provider/app";

import { router } from "./routers/index";
import { store } from "./services/store/store";

import "./assets/globalcss.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>
	<GlobalProvider>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</GlobalProvider>
	// </React.StrictMode>
);
