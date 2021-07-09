import store from "../store";

export const pushLinkToken = (token) => ({
    type: "pushLinkToken",
    payload: token
});

export const pushClient = (client) => ({
    type: 'pushClient',
    payload: client
});

export const pushPublicToken = (token) => ({
    type: 'pushPublicToken',
    payload: token
})

export const pushAccessToken = (token) => ({
    type: 'pushAccessToken',
    payload: token
})

export const pushBankAccounts = (arr) => ({
    type: 'pushBankAccounts',
    payload: arr
})

export function pushLinkTokenToReducer(token) {
    return store.dispatch(pushLinkToken(token))
}

export function pushClientToReducer(client) {
    return store.dispatch(pushClient(client))
}

export function pushPublicTokenToReducer(token) {
    return store.dispatch(pushPublicToken(token))
}

export function pushAccessTokenToReducer(token) {
    return store.dispatch(pushAccessToken(token))
}

export function pushBankAccountsToReducer(arr) {
    return store.dispatch(pushBankAccounts(arr))
}
