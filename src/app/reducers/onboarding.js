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
            // console.log(valState[valueIndex]);
            return valState;

        // for handling optional input (CategoryDetailItem)
        case 'updateOptional' :
            const optionalIndex = state.findIndex(
                (category) => category.id === action.payload.item.id
            );
            const optionalState = [...state];
            optionalState[optionalIndex].optional = action.payload.value;
            // console.log(optionalState[optionalIndex]);
            return optionalState;

        // for handling period selection for onboarding(ModalPicker)
        case 'updatePeriod' :
            const periodIndex = state.findIndex(
                (category) => category.id === action.payload.item.id
            );
            const periodState = [...state];
            periodState[periodIndex].period = action.payload.period;
            // console.log(periodState[periodIndex]);
            return periodState;
        case 'updateSum' :
            const i = state.findIndex(
                (category) => category.id == action.payload.item.id
            );
            const sumState = [...state];
            sumState[i].sum = action.payload.sum;
            // return ([
            //     ...state,
            //     state[i].sum = action.payload.sum
            // ]);
        default: 
            return state;
    }
};