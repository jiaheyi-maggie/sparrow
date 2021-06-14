import { createSlice } from "@reduxjs/toolkit";
import toBeSelected from '../../data/categories-bool';

export const selectCategorySlice = createSlice({
    name: 'categories',
    initialState: toBeSelected,
    reducers: {
        // change checked field to true
        toggleCheck: (state, action) => {
            const index = state.findIndex(
                (category) => category.id === action.payload.id
            );
            state[index].checked = action.payload.checked;
        },

    },
});

export const { toggleCheck } = selectCategorySlice.actions;
export default selectCategorySlice.reducer; 