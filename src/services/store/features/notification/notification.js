import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
    name: "notification",
    initialState: {
        notifications: [],
    },
    reducers: {
        newNotification: (state, action) => {
            return [
                ...state,
                action.payload
            ];
        },
        // changeSectionActionSelected: (state, action) => {
        //     return {
        //         ...state,
        //         sectionActionSelected: action.payload
        //     };
        // }
    }
})

export const { newNotification } = notificationSlice.actions;

export default notificationSlice.reducer;