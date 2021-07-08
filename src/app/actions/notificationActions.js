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
export async function sendPushNotifications(token) {
    const message = {
        to: token,
        sound: 'default',
        title: 'Welcome to Sparrow',
        body: 'Go to bank accounts page -> Add',
        data: { someData: 'data goes here' },
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