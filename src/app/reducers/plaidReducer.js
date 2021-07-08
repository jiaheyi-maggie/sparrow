const initialState = {
    client: null,
    link_token: null,
    bank_accounts: []
}

const plaidReducer = (state = initialState, action) => {
    switch (action.type) {
        case "pushLinkToken":
            // console.log("action.payload.token");
            return {
                ...state,
                link_token: action.payload.linkToken
            }
        case "pushClient":
            return {
                ...state, 
                client: action.payload.client
            }
        default:
            return state
    }
}

export default plaidReducer;