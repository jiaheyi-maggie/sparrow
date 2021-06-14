import { createSlice } from "@reduxjs/toolkit";
import toBeSelected from '../../data/categories-bool';

export const selectCategorySlice = createSlice({
    name: 'categories',
    initialState: toBeSelected,
    reducers: {
        changeCheckField: (state, action) => {

            // change checked field to true
            if (action.type === 'categoryList/checkCategory') {
                return {
                    ...state,
                    //update category check field

                }
            }
        }
    }
});

export const { changeCheckField } = selectCategorySlice.actions;
export default selectCategorySlice.reducer; 