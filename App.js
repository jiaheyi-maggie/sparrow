import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './src/screens/SignIn';
import Register from './src/screens/Register';
import OnboardingNavigation from './src/screens/onboarding/OnboardingNavigation';
import theme from './src/assets/theme';
import HomeNavigation from './src/screens/main/HomeNavigation';
import { Provider } from 'react-redux';
import store from './src/app/store';



import * as firebase from 'firebase';
import Login from './src/screens/Login';


const Stack = createStackNavigator();


  // setup firebase
  // TODO: use environment variable to hide keys
  const firebaseConfig = {
    apiKey: "AIzaSyDCkkAAUGHzctGZcwCy40NgzdmEW-3_ijo",
    authDomain: "sparrow-budget.firebaseapp.com",
    databaseURL: "https://sparrow-budget-default-rtdb.firebaseio.com",
    projectId: "sparrow-budget",
    storageBucket: "sparrow-budget.appspot.com",
    messagingSenderId: "894285912383",
    appId: "1:894285912383:web:c75b2f71cc5ea2a34a1b8a",
    measurementId: "G-DRRHWERZCY"
  };

  // ensure that firebase was not initialized on startup
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  } 

export default class App extends Component {

  // TODO: setup app font
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator
            headerMode='none'
            initialRouteName='onboarding'>
            <Stack.Screen name='onboarding' component={OnboardingNavigation}/>
            <Stack.Screen name='register' component={Register} />
            <Stack.Screen name='signin' component={Login} />
            {/* <Stack.Screen name='signup' component={SignUp}/> */}
            {/* <Stack.Screen name='signin' component={SignIn}/> */}
            <Stack.Screen name='home' component={HomeNavigation}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
