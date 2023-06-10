import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: "sidebar",
    initialState: {
        sectionSelected: "",
        sectionActionSelected: ""
    },
    reducers: {
        changeSectionSelected: (state, action) => {
            return {
                ...state,
                sectionSelected: action.payload
            };

        },
        changeSectionActionSelected: (state, action) => {
            return {
                ...state,
                sectionActionSelected: action.payload
            };
        }
    }
})

export const { changeSectionSelected, changeSectionActionSelected } = menuSlice.actions;

export default menuSlice.reducer;