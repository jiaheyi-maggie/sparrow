import { combineReducers, createStore } from "redux";
import reducer from './reducers/onboarding';
import longTerm from "./reducers/longTerm";
import shortTerm from "./reducers/shortTerm";

const rootReducer = combineReducers({
    reducer,
    longTerm,
    shortTerm
})

const store = createStore(rootReducer);

export default store;