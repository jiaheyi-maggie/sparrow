import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import onboarding from './screens/onboarding';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import OnboardingNavigation from './screens/onboarding/OnboardingNavigation';

const Stack = createStackNavigator();

const App = () => {
  // TODO: setup app font
  let [fontLoaded] = useFonts({
    'Ubuntu-Medium': require('./assets/fonts/Ubuntu/Ubuntu-Medium.ttf'),
    'Ubuntu-Light': require('./assets/fonts/Ubuntu/Ubuntu-Light.ttf'),
  });

  if (!fontLoaded) {
    return <AppLoading />
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          headerMode='none'
          initialRouteName='onboarding'>
          <Stack.Screen name='onboarding' component={OnboardingNavigation}/>
          <Stack.Screen name='signup' component={SignUp}/>
          <Stack.Screen name='signin' component={SignIn}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;