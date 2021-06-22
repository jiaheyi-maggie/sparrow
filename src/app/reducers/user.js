const initialState = {
    currentUser: null,
    categories: [],
    longTerm: [],
    shortTerm: []
}

// use thunk to call firebase API
export default user = (state = initialState, action) => {
    // use redux thunk
    switch (action.type) {
        case "USER_STATE_CHANGE":
            return {
                ...state,
                currentUser: action.currentUser
            }
        case "BUDGET_STATE_CHANGE":
            return {
                ...state,
                categories: action.categories,
                longTerm: action.longTerm,
                shortTerm: action.shortTerm
            }
        default:
            return state; 
    }
};