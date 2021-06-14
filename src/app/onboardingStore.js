import { configureStore } from "@reduxjs/toolkit";
import selectCategoryReducer from '../screens/onboarding/selectCategorySlice';

// redux store: store most updated category checklist
export default configureStore({
    //can have multiple reducers here

    // selectCategorySlice
    reducer: {
        categories: selectCategoryReducer,
    },
});