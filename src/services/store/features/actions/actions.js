import { createSlice } from "@reduxjs/toolkit";

export const actionsSlice = createSlice({
    name: "actions",
    initialState: {
        loginReseted: false,

    },
    reducers: {
        changeLoginReset: (state, action) => {
            return {
                ...state,
                loginReseted: action.payload
            };
        }
    }
})

export const { changeLoginReset } = actionsSlice.actions;

export default actionsSlice.reducer;