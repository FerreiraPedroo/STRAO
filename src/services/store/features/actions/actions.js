import { createSlice } from "@reduxjs/toolkit";

export const actionsSlice = createSlice({
    name: "actions",
    initialState: {
        loginReseted: false,

    },
    reducers: {
        changeLoginReseted: (state, action) => {
            return {
                ...state,
                loginReseted: action.payload
            };
        }
    }
})

export const { changeLoginReseted } = actionsSlice.actions;

export default actionsSlice.reducer;