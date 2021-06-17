import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import OnboardingNavigation from './src/screens/onboarding/OnboardingNavigation';
import HomeNavigation from './src/screens/main/HomeNavigation';
import theme from './src/assets/theme';
import { Provider } from 'react-redux';
import store from './src/app/store';

import * as firebase from 'firebase';



// initialize navigation 
const Stack = createStackNavigator();

// setup firebase
// TODO: use environment variable to hide keys
export const firebaseConfig = {
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

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    }
  }

  // auth state listener
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if(!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }

  // TODO: setup app font
  render() { 
    const {loggedIn, loaded } = this.state;
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
  }
}

export default App;
