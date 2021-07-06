import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducer from './reducers/onboarding';
import longTerm from "./reducers/longTerm";
import shortTerm from "./reducers/shortTerm";
import user from "./reducers/user";
import averagePeriod from "./reducers/averagePeriod";
import marketReducer from "./reducers/marketReducer";

const rootReducer = combineReducers({
    reducer,
    longTerm,
    shortTerm,
    user,
    averagePeriod,
    marketReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;