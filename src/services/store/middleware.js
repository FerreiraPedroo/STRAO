import { applyMiddleware } from "@reduxjs/toolkit";

const middleLog = storeAPI => next => action => {
    console.log(action.type, new Date().toString());

    console.log("MIDDLE");
    return next(action);
}

export const middlewareEnchancer = applyMiddleware(middleLog);