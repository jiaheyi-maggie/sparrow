import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView } from 'react-native';
import { NavigationContainer, useNavigationState } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import OnboardingNavigation from './src/screens/onboarding/OnboardingNavigation';
import HomeNavigation from './src/screens/main/HomeNavigation';
import ForgotCred from './src/screens/ForgotCred';
import theme from './src/assets/theme';
import { Provider } from 'react-redux';
import * as Font from "expo-font";
import store from './src/app/store';
import firebaseConfig from './src/config/firebase/keys';

import * as firebase from 'firebase';

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
  const [fontLoaded, setFontLoaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      "ubuntu-medium": require("./src/assets/fonts/Ubuntu/Ubuntu-Medium.ttf"),
      "ubuntu-light": require("./src/assets/fonts/Ubuntu/Ubuntu-Light.ttf"),
      "ubuntu-bold": require("./src/assets/fonts/Ubuntu/Ubuntu-Bold.ttf")
    });
  };


  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if(!user) {
        setLoggedIn(false);
        setLoaded(true);
      } else {
        setLoaded(true);
        setLoggedIn(true);
      }
    })
  }, [loaded, loggedIn]);

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

// Class Component

// export class App extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       loaded: false,
//       loggedIn: false,
//       fontLoaded: false
//     }
//   }

//   // auth state listener
//   componentDidMount() {

//     firebase.auth().onAuthStateChanged((user) => {
//       if(!user) {
//         this.setState({
//           loggedIn: false,
//           loaded: true,
//         });
//       } else {
//         this.setState({
//           loggedIn: true,
//           loaded: true,
//         })
//       }
//     })
//   };

//   fetchFonts = () => {
//     return Font.loadAsync({
//       "ubuntu-medium": require("./src/assets/fonts/Ubuntu/Ubuntu-Medium.ttf"),
//       "ubuntu-light": require("./src/assets/fonts/Ubuntu/Ubuntu-Light.ttf"),
//       "ubuntu-bold": require("./src/assets/fonts/Ubuntu/Ubuntu-Bold.ttf")
//     });
//   };

//   // TODO: setup app font
//   render() { 
//     const { loggedIn, loaded } = this.state;



//     if (!loaded) {
//       return (
//         <SafeAreaView>
//           <Image 
//             source={require('./src/assets/splash.png')} 
//             resizeMode='contain'
//             style={{
//               flexDirection: 'column',
//               flex: 1
//             }}
//           />
//         </SafeAreaView>
//       );
//     }
//     // if user is not logged in
//     if(!loggedIn) {
//       return (
//         <Provider store={store}>
//           <NavigationContainer theme={theme}>
//             <Stack.Navigator
//               headerMode='none'
//               initialRouteName='onboarding'>
//               <Stack.Screen name='onboarding' component={OnboardingNavigation}/>
//               <Stack.Screen name='register' component={Register} />
//               <Stack.Screen name='signin' component={Login} />
//               <Stack.Screen name='forgot' component={ForgotCred}/>
//               <Stack.Screen name='home' component={HomeNavigation}/>
//             </Stack.Navigator>
//           </NavigationContainer>
//         </Provider>
//       );
//     } else {
//       return (
//         <Provider store={store}>
//           <NavigationContainer theme={theme}>
//             <Stack.Navigator
//               headerMode='none'
//               initialRouteName='home'>
//               <Stack.Screen name='home' component={HomeNavigation}/>
//             </Stack.Navigator>
//           </NavigationContainer>
//         </Provider>
//       )
//     }
//   }
// }

// export default App;
