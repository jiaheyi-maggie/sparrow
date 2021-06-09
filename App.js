import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import onboarding from './screens/onboarding';
import SignUp from './screens/SignUp';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode='none'>
        <Stack.Screen name='onboarding' component={onboarding}/>
        <Stack.Screen name='login' component={SignUp}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;