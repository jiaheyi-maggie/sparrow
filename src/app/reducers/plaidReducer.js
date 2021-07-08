import * as plaidActions from '../actions/plaidActions';

const initialState = {
    link_token: null
}

const plaidReducer = (state = initialState, action) => {
    switch (plaidActions.type) {
        case "pushLinkToken":
            console.log("action.payload.token");
            return {
                ...state,
                link_token: action.payload.token
            }
        default:
            return state
    }
}

export default plaidReducer;