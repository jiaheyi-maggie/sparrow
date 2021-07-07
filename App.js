import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Image, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import OnboardingNavigation from './src/screens/onboarding/OnboardingNavigation';
import HomeNavigation from './src/screens/main/HomeNavigation';
import ForgotCred from './src/screens/ForgotCred';
import theme from './src/constants/theme';
import { Provider } from 'react-redux';
import store from './src/app/store';
import firebaseConfig from './src/config/firebase/keys';
import * as firebase from 'firebase';
import { usePlaidLink, PlaidLinkOptions, PlaidLinkOnSuccess } from 'react-plaid-link';

// initialize navigation 
const Stack = createStackNavigator();

// ensure that firebase was not initialized on startup
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ experimentalForceLongPolling: true });
} 

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(useFonts({
    "Ubuntu-Medium": require("./src/assets/fonts/Ubuntu/Ubuntu-Medium.ttf"),
    "Ubuntu-Light": require("./src/assets/fonts/Ubuntu/Ubuntu-Light.ttf"),
    "Ubuntu-Bold": require("./src/assets/fonts/Ubuntu/Ubuntu-Bold.ttf")
  }));

  if (!fontLoaded) {
    return <AppLoading />;
  }

  const [linkToken, setLinkToken] = useState(null);

  const generateToken = async () => {
    const response = await fetch('/api/create_link_token', {
      method: 'POST',
    });
    const data = await response.json();
    setLinkToken(data.link_token);
  };

  useEffect(() => {
    // require('dotenv').config();
    generateToken();

    firebase.auth().onAuthStateChanged((user) => {
      if(!user) {
        setLoggedIn(false);
        setLoaded(true);
      } else {
        setLoaded(true);
        setLoggedIn(true);
      }
    })
    }, []);

  const handleAppLoading = () => {
    if (!loaded) {
      return (
        <SafeAreaView>
          <Image 
            source={require('./src/assets/splash.png')} 
            resizeMode='contain'
            style={{
              flexDirection: 'column',
              flex: 1
            }}
          />
        </SafeAreaView>
      );
    }
    // if user is not logged in
    if(!loggedIn) {
      return (
        <Provider store={store}>
          <NavigationContainer theme={theme}>
            <Stack.Navigator
              headerMode='none'
              initialRouteName='onboarding'>
              <Stack.Screen name='onboarding' component={OnboardingNavigation}/>
              <Stack.Screen name='register' component={Register} />
              <Stack.Screen name='signin' component={Login} />
              <Stack.Screen name='forgot' component={ForgotCred}/>
              <Stack.Screen name='home' component={HomeNavigation}/>
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      );
    } else {
      return (
        <Provider store={store}>
          <NavigationContainer theme={theme}>
            <Stack.Navigator
              headerMode='none'
              initialRouteName='home'>
              <Stack.Screen name='home' component={HomeNavigation}/>
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      )
    }

  };

  return (
    handleAppLoading()
  );

}

export default App;

