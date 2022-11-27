import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Root } from "../pages/Root";
import { Login } from "../pages/Login";
import { ErrorPage } from "../errorPage";

import { Home } from "../pages/Home/index";
import { HumanResources } from "../pages/HumanResources"

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/rh",
                element: <HumanResources />,
            },
        ],
    },
]);
