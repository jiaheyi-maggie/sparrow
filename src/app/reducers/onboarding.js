import categoriesWithValue from "../../data/categories-bool";
// reducer for onboarding
// WATCH OUT FOR INDEXING
export default reducer = (state = categoriesWithValue, action) => {
    switch (action.type) {
        case 'pressButton': 
            const index = state.findIndex(
                (category) => category.id === action.payload.id
            );
            const newState = [...state];
            newState[index].checked = !action.payload.checked;
            console.log(state);
            return newState;
        // for handling text input (CategoryDetailItem): works!
        case 'updateValue' :
            const valueIndex = state.findIndex(
                (category) => category.id === action.payload.item.id
            );
            const valState = [...state];
            valState[valueIndex].value = action.payload.value;
            // console.log(action.payload.value);
            // console.log(action.payload.item);
            return valState;
        
        // TODO: number field change doesn't work right now
        case 'inputNumber':
            const itemIndex = state.findIndex(
                (category) => category.id === action.payload.item.id
            );
            const valueState = [...state];
            valueState[itemIndex].value = action.payload.item.value;
            return valueState;
        // TODO: period field change doesn't work right now (same issue as number field)
        case 'changePeriod':
            const periodIndex = state.findIndex(
                (category) => category.id === action.payload.id
            );
            const periodState = [...state];
            periodState[periodIndex].period = action.payload.period;
            console.log(periodState);
            return periodState;

        // TODO: period field change doesn't work right now (same issue as number field)
        case 'changeCategorySum':
            const sumIndex = state.findIndex(
                (category) => category.id === action.payload.item.id
            );
            const sumState = [...state];
            sumState[sumIndex].sum = action.payload.sum;
            console.log(action.payload.item);
            return sumState;
        default: 
            return state;
    }
};