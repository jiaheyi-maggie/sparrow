// const initialState = [
//     currentUser= {
//         firstName: '',
//         lastName: '',
//         username: '',
//         email: ''
//     }
// ];

// use thunk to call firebase API
export default user = (state = [], action) => {
    // use redux thunk
    switch (action.type) {
        case "USER_STATE_CHANGE":
            const user = [...state];
            user = action.payload;
            return user; 
            // return {
            //     ...state,
            //     currentUser: action.currentUser
            // }
        default:
            return state; 
    }
};