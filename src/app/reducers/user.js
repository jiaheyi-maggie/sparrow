const initialState = {
    currentUser: null
}

export default user = (state = initialState, action) => {
    switch (action.type) {
        // store user information in redux
        case 'getUserInfo':
            const user = [...state];
            user.currentUser = action.payload.currentUser;
            return user; 
        default:
            return state;
    }
}