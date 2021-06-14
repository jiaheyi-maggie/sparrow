import { configureStore } from "@reduxjs/toolkit";
import selectCategoryReducer from '../screens/onboarding/selectCategorySlice';

export default configureStore({
    //can have multiple reducers here

    // selectCategorySlice
    reducer: {
        categories: selectCategoryReducer,
    },
});