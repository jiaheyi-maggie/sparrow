const initialState = {
    currentUser: null,
    categories: [],
    longTerm: [],
    shortTerm: [],
    newCategory: null
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
            const currCategories = new Array(categories);
            currCategories.push(action.categories);
            console.log(currCategories);
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
        case "updateNewCategory":
            return {
                ...state,
                newCategory: action.newCategory
            }
        case "updateNewCategoryPeriod":
            const newCat = {...state};
            newCat.newCategory.period = action.payload;
            return newCat;
        default:
            return state; 
    }
};