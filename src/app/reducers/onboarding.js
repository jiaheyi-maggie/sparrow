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
        // TODO: number field change doesn't work right now
        case 'inputNumber':
            const itemIndex = state.findIndex(
                (category) => category.id === action.payload.item.id
            );
            const valueState = [...state];
            valueState[itemIndex].value = action.payload.item.value;
            return valueState;

        default: 
            return state;
    }
};