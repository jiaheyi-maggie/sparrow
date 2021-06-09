import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './Welcome';
import SelectCategory from './SelectCategory';
import LongTerm from './LongTerm';
import BudgetOverview from './BudgetOverview';

/* Add the onboarding navigation stack here */
const OnboardingStack = createStackNavigator();

const OnboardingNavigation = () => {
    return(
        <OnboardingStack.Navigator headerMode='none'>
            <OnboardingStack.Screen name='welcome' component={Welcome}/>
            <OnboardingStack.Screen name='selectCategory' component={SelectCategory}/>
            <OnboardingStack.Screen name='longTerm' component={LongTerm}/>
            <OnboardingStack.Screen name='budgeView' component={BudgetOverview}/>
        </OnboardingStack.Navigator>
    );

};

export default OnboardingNavigation;