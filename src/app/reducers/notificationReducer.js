const initialState = {
    notification_token: null,
}

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getNotificationToken':
            return {
                ...state,
                notification_token: action.payload.token
            }
        default:
            return state
    }
}

export default notificationReducer; 