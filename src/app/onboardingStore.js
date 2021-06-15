import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import selectCategoryReducer from '../screens/onboarding/selectCategorySlice';
import categoriesWithValue from "../data/categories-bool";

// redux store: store most updated category checklist
// export default configureStore({
//     //can have multiple reducers here

//     // selectCategorySlice
//     reducer: {
//         categories: selectCategoryReducer,
//     },
// });

// WATCH OUT FOR INDEXING
const reducer = (state = [], action) => {
    switch (action.type) {
        case 'pressButton': 
            const index = state.findIndex(
                (category) => category.id === action.payload.id
            );
            console.log(state);
            const newState = [...state];
            newState[index].checked = !action.payload.checked;
            return newState;
        default: 
            return state;
    }

    // switch (action.type) {
    //     case 'pressButton':
    //         const newItem = {
    //             id: action.payload.id,
    //             title: action.payload.title,
    //             checked: !action.payload.checked,
    //             value: action.payload.value
    //         };
    //         const newState = [...state];
    //         const index = action.payload.id;
    //         newState[index] = newItem;
    //         console.log(index);
    //         console.log(state);
    //         return newState;
    //         // return {
    //         //     ...state,
    //         //     [index]: newItem
    //         // }
    //     default: 
    //         return state;
    // }
};

const onboardingStore = createStore(reducer, categoriesWithValue);

export default onboardingStore;