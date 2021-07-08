const initialState = {
    link_token: null
}

const plaidReducer = (state = initialState, action) => {
    switch (action.type) {
        case "pushLinkToken":
            // console.log("action.payload.token");
            return {
                ...state,
                link_token: action.payload.linkToken
            }
        default:
            return state
    }
}

export default plaidReducer;