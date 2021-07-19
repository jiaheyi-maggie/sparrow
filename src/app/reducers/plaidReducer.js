const initialState = {
    client: null,
    link_token: null,
    public_token: null, 
    access_token: null,
    bank_accounts: [],
    transactions: [],
}

const plaidReducer = (state = initialState, action) => {
    switch (action.type) {
        case "pushLinkToken":
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
                public_token: action.payload.publicToken
            }
        case "pushAccessToken":
            return {
                ...state,
                access_token: action.payload.accessToken
            }
        case "pushBankAccounts":
            return {
                ...state,
                bank_accounts: action.payload.accounts
            }
        case "updateTransactions":
            return {
                ...state,
                transactions: action.payload.transactions
            }
        default:
            return state
    }
}

export default plaidReducer;