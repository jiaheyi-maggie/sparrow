import store from "../store";

export const pushLinkToken = (token) => ({
    type: "pushLinkToken",
    payload: token
});

export const pushClient = (client) => ({
    type: 'pushClient',
    payload: client
});

export function pushLinkTokenToReducer(token) {
    return (
        store.dispatch(pushLinkToken(token))
    )
}

export function pushClientToReducer(client) {
    return store.dispatch(pushClient(client))
}

export function onSuccess(success) {
    fetch('https://sandbox.plaid.com', {
			method: 'POST',
			body: {
				publicToken: success.publicToken,
				accounts: success.metadata.accounts,
				institution: success.metadata.institution,
				linkSessionId: success.metadata.linkSessionId
			},
		});
}

export function onExit(exit) {
    return (
        console.log(exit)
    );
}

// export function onSuccessSandbox(success) {
//     try{
//         // const publicTokenResponse = await
//     }

// }