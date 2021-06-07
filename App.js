import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import onboarding from './screens/onboarding';
import login from './screens/login';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='onboarding' component={onboarding}/>
        <Stack.Screen name='login' component={login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;