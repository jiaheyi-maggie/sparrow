import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import SignUp from './src/screens/SignUp';
import SignIn from './src/screens/SignIn';
import OnboardingNavigation from './src/screens/onboarding/OnboardingNavigation';
import theme from './src/assets/theme';
import HomeNavigation from './src/screens/main/HomeNavigation';
import { Provider } from 'react-redux';
import store from './src/app/store';

const Stack = createStackNavigator();

const App = () => {
  // TODO: setup app font
  let [fontLoaded] = useFonts({
    'Ubuntu-Medium': require('./src/assets/fonts/Ubuntu/Ubuntu-Medium.ttf'),
    'Ubuntu-Light': require('./src/assets/fonts/Ubuntu/Ubuntu-Light.ttf'),
  });

  if (!fontLoaded) {
    return <AppLoading />
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator
            headerMode='none'
            initialRouteName='onboarding'>
            <Stack.Screen name='onboarding' component={OnboardingNavigation}/>
            <Stack.Screen name='signup' component={SignUp}/>
            <Stack.Screen name='signin' component={SignIn}/>
            <Stack.Screen name='home' component={HomeNavigation}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;