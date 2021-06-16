import { combineReducers, createStore } from "redux";
import { onboardingReducer, userReducers } from './reducers';
import categoriesWithValue from "../data/categories-bool";

// WATCH OUT FOR INDEXING
const reducer = (state = [], action) => {
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
            valueState[itemIndex].value = action.payload.number;
            return valueState;

        default: 
            return state;
    }
};

// const rootReducer = combineReducers({
//     onboardingReducer,
//     userReducers
// })

const store = createStore(reducer, categoriesWithValue);
// const store = createStore(rootReducer);

export default store;