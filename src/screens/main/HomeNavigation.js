import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTab from './HomeTab';

/* Add the onboarding navigation stack here */
const HomeStack = createStackNavigator();

const HomeNavigation = () => {
    return(
        <HomeStack.Navigator >
            <HomeStack.Screen name='home' component={HomeTab}/>
        </HomeStack.Navigator>
    );
};

export default HomeNavigation;