// const initialState = [
//     currentUser= {
//         firstName: '',
//         lastName: '',
//         username: '',
//         email: ''
//     }
// ];

const initialState = {
    currentUser: null
}

// use thunk to call firebase API
export default user = (state = initialState, action) => {
    // use redux thunk
    switch (action.type) {
        case "USER_STATE_CHANGE":
            // const user = [...state];
            // user = action.payload;
            // console.log(user);
            // return user; 
            return {
                ...state,
                currentUser: action.currentUser
            }
        default:
            return state; 
    }
};