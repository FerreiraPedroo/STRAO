import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { GlobalProvider } from "./provider/app";

import { router } from "./routers/index";

import "./assets/globalcss.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>
	<GlobalProvider>
		<RouterProvider router={router} />
	</GlobalProvider>
	// </React.StrictMode>
);
