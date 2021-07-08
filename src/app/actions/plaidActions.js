export const pushLinkToken = (token) => ({
    type: "pushLinkToken",
    payload: token
});

export function pushLinkTokenToReducer(token) {
    return dispatch => {
        dispatch(pushLinkToken(token))
    }
}