import React, { useState, useEffect, useRef } from "react";
import { Image, SafeAreaView, Alert, Platform } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import * as firebase from "firebase";
import Register from "./src/screens/Register";
import Login from "./src/screens/Login";
import OnboardingNavigation from "./src/screens/onboarding/OnboardingNavigation";
import HomeNavigation from "./src/screens/main/HomeNavigation";
import ForgotCred from "./src/screens/ForgotCred";
import theme from "./src/constants/theme";
import store from "./src/app/store";
import firebaseConfig from "./src/config/firebase/keys";
import PlaidIndex from "./src/config/plaid";
import { pushLinkTokenToReducer, pushClientToReducer } from "./src/app/actions/plaidActions";
import { pushNotificationTokenToReducer, sendPushNotifications } from "./src/app/actions/notificationActions";

// initialize navigation
const Stack = createStackNavigator();

// ensure that firebase was not initialized on startup
if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig);
	firebase.firestore().settings({ experimentalForceLongPolling: true });
}

// Notification handler
Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: true,
		shouldSetBadge: true,
	})
})

/* APP Component  */
const App = () => {
	const [loaded, setLoaded] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);
	const [fontLoaded, setFontLoaded] = useState(
		useFonts({
			"Ubuntu-Medium": require("./src/assets/fonts/Ubuntu/Ubuntu-Medium.ttf"),
			"Ubuntu-Light": require("./src/assets/fonts/Ubuntu/Ubuntu-Light.ttf"),
			"Ubuntu-Bold": require("./src/assets/fonts/Ubuntu/Ubuntu-Bold.ttf"),
		})
	);
		
	if (!fontLoaded) {
		return <AppLoading />;
	}

	// notifications
	const [notificationToken, setNotificationToken] = useState('');
	const [notification, setNotification] = useState(false);
	const notificationListener = useRef();
	const responseListener = useRef();
	
	// grab notification token
	const registerForPushNotificationsAsync = async () => {
		let token; 
		if (Constants.isDevice) {
			// check is there is existing permission for push notifications 
			const { status: existingStatus } = await Notifications.getPermissionsAsync();
			let finalStatus = existingStatus;
			// ask for user permission to send notifications
			if (existingStatus !== 'granted') {
				const { status } = await Notifications.requestPermissionsAsync();
				finalStatus = status;
			}
			// user did not give permission
			if (finalStatus !== 'granted') {
				Alert.alert("Failed to get push token for push notifications.");
				return;
			}
			// otherwise: get token
			token = (await Notifications.getExpoPushTokenAsync()).data;
			setNotificationToken(token);
		} else {
			Alert.alert("Must use physical device for push notifications");
		}

		// special channel for android
		if (Platform.OS === 'android') {
			Notifications.setNotificationChannelAsync('default', {
				name: 'default',
				importance: Notifications.AndroidImportance.MAX,
				vibrationPattern: [0, 250, 250, 250],
				lightColor: '#FF231F7C',
			})
		}

		return token;
	};
		
	// plaid link token
	const [linkToken, setLinkToken] = useState(null);
	const plaid = require("plaid");
	const client = new plaid.Client({
		clientID: PlaidIndex.PLAID_CLIENT_ID,
		secret: PlaidIndex.PLAID_SECRET,
		env: plaid.environments.sandbox,
	});
		
	const generateToken = async () => {
		const response = await client
		.createLinkToken({
			user: {
				client_user_id: "1234",
			},
			client_name: "Sparrow",
			products: ["auth", "transactions"],
			country_codes: ["US"],
			language: "en",
		})
		.catch((error) => {
			console.log(error);
		});
		
		// TODO: only generates when refreshed
		const linkToken = response.link_token;
		setLinkToken(linkToken);
	};
		
	useEffect(() => {
		generateToken();
		pushLinkTokenToReducer({linkToken});
		pushClientToReducer({client});
		// console.log(store.getState().plaidReducer);
		registerForPushNotificationsAsync()
			.then((token) => pushNotificationTokenToReducer(token));
		
		
		firebase.auth().onAuthStateChanged((user) => {
			if (!user) {
				setLoggedIn(false);
				setLoaded(true);
				// TODO: send new user notifications
				sendPushNotifications(notificationToken, "Welcome to Sparrow!", 
					"Head to Bank Accounts page to get started. Or scroll under Overview to view your budget!")
			} else {
				setLoaded(true);
				setLoggedIn(true);
			}
		});

		// This listener is fired whenever a notification is received while the app is foregrounded
		notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
			setNotification(notification);
		});

		// This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
		responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
			console.log(response);
		});

		// clean up
		return () => {
			Notifications.removeNotificationSubscription(notificationListener.current);
			Notifications.removeNotificationSubscription(responseListener.current);
		};

	}, []);
		
	const handleAppLoading = () => {
		if (!loaded) {
			return (
				<SafeAreaView>
					<Image
						source={require("./src/assets/splash.png")}
						resizeMode="contain"
						style={{
							flexDirection: "column",
							flex: 1,
						}}
					/>
				</SafeAreaView>
			);
		}
		// if user is not logged in
		if (!loggedIn) {
			return (
				<Provider store={store}>
					<NavigationContainer theme={theme}>
						<Stack.Navigator headerMode="none" initialRouteName="onboarding">
							<Stack.Screen name="onboarding" component={OnboardingNavigation} />
							<Stack.Screen name="register" component={Register} />
							<Stack.Screen name="signin" component={Login} />
							<Stack.Screen name="forgot" component={ForgotCred} />
							<Stack.Screen name="home" component={HomeNavigation} />
						</Stack.Navigator>
					</NavigationContainer>
				</Provider>
			);
		} else {
			return (
				<Provider store={store}>
					<NavigationContainer theme={theme}>
						<Stack.Navigator headerMode="none" initialRouteName="home">
							<Stack.Screen name="home" component={HomeNavigation} />
						</Stack.Navigator>
					</NavigationContainer>
				</Provider>
			);
		}
	};
				
	return handleAppLoading();
};
				
export default App;
				