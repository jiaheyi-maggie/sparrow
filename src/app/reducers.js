import categoriesWithValue from "../data/categories-bool";
// Reducers for Onboarding
// WATCH OUT FOR INDEXING
export default reducer = (state = categoriesWithValue, action) => {
    switch (action.type) {
        case 'pressButton': 
            const index = state.findIndex(
                (category) => category.id === action.payload.id
            );
            const newState = [...state];
            newState[index].checked = !action.payload.checked;
            return newState;
        // number field change doesn't work right now
        case 'inputNumber':
            const item = state.findIndex(
                (category) => category.id === action.payload.item.id
            );
            console.log(state);
            const valueState = [...state];
            valueState[item].value = action.payload.input;
            return valueState;

        default: 
            return state;
    }
};


// Reducers for user
export const userReducers = (state = null, action) => {
    switch (action.type) {
        case 'setUserInfo':
            // TODO: change user info if firestore changes
            return state;
        default:
            return state;
    }
}