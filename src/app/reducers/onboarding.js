/* Reducer for onboarding: contains categories*/

import categoriesWithValue from "../../data/categories-bool";

// WATCH OUT FOR INDEXING
export default reducer = (state = categoriesWithValue, action) => {
    switch (action.type) {
        // toggle checked field in categories (SelectCategory)
        case 'pressButton': 
            const index = state.findIndex(
                (category) => category.id === action.payload.id
            );
            const newState = [...state];
            newState[index].checked = !action.payload.checked;
            return newState;

        // for handling text input (CategoryDetailItem)
        case 'updateValue' :
            const valueIndex = state.findIndex(
                (category) => category.id === action.payload.item.id
            );
            const valState = [...state];
            valState[valueIndex].value = action.payload.value;
            console.log(valState[valueIndex]);
            return valState;

        // for handling optional input (CategoryDetailItem)
        case 'updateOptional' :
            const optionalIndex = state.findIndex(
                (category) => category.id === action.payload.item.id
            );
            const optionalState = [...state];
            optionalState[optionalIndex].optional = action.payload.value;
            console.log(optionalState[optionalIndex]);
            return optionalState;

        // for handling period selection (ModalPicker)
        case 'updatePeriod' :
            const periodIndex = state.findIndex(
                (category) => category.id === action.payload.item.id
            );
            const periodState = [...state];
            periodState[periodIndex].period = action.payload.period;
            console.log(periodState[periodIndex]);
            return periodState;

        // for handling text input (SummaryListItem)
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
            console.log(copyState[i]);
            return copyState;

        default: 
            return state;
    }
};