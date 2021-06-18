/* Reducer for onboarding: contains categories*/

import categoriesWithValue from "../../data/categories-bool";

// WATCH OUT FOR INDEXING
export default reducer = (state = categoriesWithValue, action) => {
    switch (action.type) {
        // toggle checked field in categories (SelectCategory): works!
        case 'pressButton': 
            const index = state.findIndex(
                (category) => category.id === action.payload.id
            );
            const newState = [...state];
            newState[index].checked = !action.payload.checked;
            return newState;

        // for handling text input (CategoryDetailItem): works!
        case 'updateValue' :
            const valueIndex = state.findIndex(
                (category) => category.id === action.payload.item.id
            );
            const valState = [...state];
            valState[valueIndex].value = action.payload.value;
            return valState;

        // for handling period selection (ModalPicker): works!
        case 'updatePeriod' :
            const periodIndex = state.findIndex(
                (category) => category.id === action.payload.item.id
            );
            const periodState = [...state];
            periodState[periodIndex].period = action.payload.period;
            return periodState;
        
        // TODO: number field change doesn't work right now
        case 'inputNumber':
            const itemIndex = state.findIndex(
                (category) => category.id === action.payload.item.id
            );
            const valueState = [...state];
            valueState[itemIndex].value = action.payload.item.value;
            return valueState;

        // for handling text input (SummaryListItem): works!
        case 'changeCategorySum':
            const sumIndex = state.findIndex(
                (category) => category.id === action.payload.item.id
            );
            const sumState = [...state];
            sumState[sumIndex].sum = action.payload.sum;
            return sumState;

        // update category sum based on value
        case 'updateSumWithValue' :
            const i = state.findIndex(
                (category) => category.id === action.payload.item.id
            );
            const copyState = [...state];
            copyState[i].sum = action.payload.sum;
            // console.log(action.payload.sum);
            return copyState;

        default: 
            return state;
    }
};