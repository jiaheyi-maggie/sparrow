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

export function pushLinkTokenToReducer(token) {
    return (
        store.dispatch(pushLinkToken(token))
    )
}

export function pushClientToReducer(client) {
    return store.dispatch(pushClient(client))
}

// export function onSuccess(success) { 
//     // TODO: server url?
//     fetch('', {
// 			method: 'POST',
// 			body: {
// 				publicToken: success.publicToken,
// 				accounts: success.metadata.accounts,
// 				institution: success.metadata.institution,
// 				linkSessionId: success.metadata.linkSessionId
// 			},
// 		});
// }

// export function onExit(exit) {
//     return (
//         console.log(exit)
//     );
// }

// export const onSuccessSandbox =  async (success, client) => {
//     return async dispatch => {
//         try {
//             const publicTokenResponse = await client.sandboxPublicTokenCreate(
//                 institutionID,
//                 initialProducts,
//             );
//             const publicToken = publicTokenResponse.public_token;
//             dispatch(pushPublicToken(publicToken));

//             const exchangeTokenResponse = await client.exchangePublicToken(publicToken);
//             const accessToken = exchangeTokenResponse.access_token;
//             console.log(accessToken);
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }