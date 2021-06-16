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

// const rootReducer = combineReducers({
//     onboardingReducer,
//     userReducers
// })

const store = createStore(reducer, categoriesWithValue);
// const store = createStore(rootReducer);

export default store;