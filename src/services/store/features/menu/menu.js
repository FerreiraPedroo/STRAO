import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: "menu",
    initialState:{
        value: []
    },
    reducers: {
        update : (state, action) => {
            state = action.payload;
        }
    }
})

export const  { update } = menuSlice.actions;

export default menuSlice.reducer;