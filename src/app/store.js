import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducer from './reducers/onboarding';
import longTerm from "./reducers/longTerm";
import shortTerm from "./reducers/shortTerm";
import user from "./reducers/user";

const rootReducer = combineReducers({
    reducer,
    longTerm,
    shortTerm,
    user 
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;