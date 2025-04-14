import { createSlice } from "@reduxjs/toolkit";

export const actionsSlice = createSlice({
    name: "actions",
    initialState: {
        loginRequest: false,

    },
    reducers: {
        setLoginReset: (state, action) => {
            return {
                ...state,
                loginRequest: action.payload
            };
        }
    }
})

export const { setLoginReset } = actionsSlice.actions;

export default actionsSlice.reducer;