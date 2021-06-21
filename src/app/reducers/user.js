const initialState = {
    currentUser: null,
    categories: [],
    longTerm: 0,
    shortTerm: 0
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
        default:
            return state; 
    }
};