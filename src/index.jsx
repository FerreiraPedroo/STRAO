import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { router } from "./routers/index";
import { store } from "./services/store/store";

import "./assets/css/globalcss.css";
import { theme } from "styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>

	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	</Provider>

	// </React.StrictMode>
);
