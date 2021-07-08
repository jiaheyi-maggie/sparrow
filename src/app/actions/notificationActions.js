import store from "../store";

export const getNotificationToken = (token) => ({
    type: 'getNotificationToken',
    payload: {token}
});

export function pushNotificationTokenToReducer(token) {
    return (
        store.dispatch(getNotificationToken(token))
    )
};

// send push notification function
export async function sendPushNotifications(token, title, body, data=null) {
    const message = {
        to: token,
        sound: 'default',
        title: title,
        body: body,
        // data: data,
    };

    await fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
            Accept: 'application.json',
            'Accept-encoding': 'gzip, deflate',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    });

}