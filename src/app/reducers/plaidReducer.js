const initialState = {
    client: null,
    link_token: null,
    public_token: null, 
    bank_accounts: [],
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
        case "pushPublicToken":
            return {
                ...state,
                public_token: action.payload.token
            }
        default:
            return state
    }
}

export default plaidReducer;