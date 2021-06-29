const initialState = {
    currentUser: null,
    categories: [],
    longTerm: [],
    shortTerm: [],
    newCategory: null,
    // isSignedOut: true
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
        case "ADD_BUDGET":
            const currCategories = [...state.categories];
            currCategories.push(action.categories);
            return {
                ...state,
                categories: currCategories
            }
        case "REMOVE_BUDGET":
            const newArr = new Array(categories);
            newArr.splice(action.index, 1);
            return {
                ...state,
                categories: newArr
            }
        case 'UPDATE_USER':

        case "updateNewCategory":
            return {
                ...state,
                newCategory: action.newCategory
            }
        case "updateRecurring":
            return {
                ...state,
                shortTerm: action.recurring
            }
        // case "userSignedOut":
        //     return {
        //         ...state,
        //         isSignedOut: false
        //     }
        default:
            return state; 
    }
};