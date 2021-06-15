// import { createSlice } from "@reduxjs/toolkit";

// import categoriesWithValue from '../../data/categories-bool';

// export const selectCategorySlice = createSlice(
//     {
//         name: 'categories',
//         initialState: categoriesWithValue,
//         reducers: {
//             // change checked field in array in store
//             // toggleCheck: (state, action) => {
//             //     const index = state.findIndex(
//             //         (category) => category.id === action.payload.id
//             //     );
//             //     // console.log(action.payload.id);
//             //     console.log(action.payload);
//             //     // console.log(index);
//             //     state[index].checked = action.payload.checked;
//             //     console.log(state);
//             // },
//             toggleCheck: (state, action) => {
//                 if (action.type === 'pressButton') {
//                     const index = state.findIndex(
//                         (category) => category.id === action.payload.id
//                     );
//                     state[index].checked = !action.payload.checked;
//                     console.log(state);
//                     console.log(action);
//                 }

//             }
//     },
// });

// export const { toggleCheck } = selectCategorySlice.actions;
// export default selectCategorySlice.reducer; 