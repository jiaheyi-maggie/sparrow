import { combineReducers, createStore } from "redux";
import reducer from './reducers/onboarding';
import longTerm from "./reducers/longTerm";

const rootReducer = combineReducers({
    reducer,
    longTerm
})

const store = createStore(rootReducer);

export default store;