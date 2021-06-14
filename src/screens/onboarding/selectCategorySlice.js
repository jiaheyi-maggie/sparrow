import { createSlice } from "@reduxjs/toolkit";
import categoriesWithValue from '../../data/categories-bool';

export const selectCategorySlice = createSlice(
    {
        name: 'categories',
        initialState: categoriesWithValue,
        reducers: {
            // change checked field in array in store
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