import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './Welcome';
import SelectCategory from './SelectCategory';
import LongTerm from './LongTerm';
import BudgetOverview from './BudgetOverview';
import CategoryDetail from './CategoryDetail';
import { Provider } from 'react-redux';
import onboardingStore from '../../app/onboardingStore';

/* Add the onboarding navigation stack here */
const OnboardingStack = createStackNavigator();

const OnboardingNavigation = () => {
    return(
        <Provider store={onboardingStore}>
            <OnboardingStack.Navigator headerMode='none'>
                <OnboardingStack.Screen name='welcome' component={Welcome}/>
                <OnboardingStack.Screen name='selectCategory' component={SelectCategory}/>
                <OnboardingStack.Screen name='categories' component={CategoryDetail}/>
                <OnboardingStack.Screen name='longTerm' component={LongTerm}/>
                <OnboardingStack.Screen name='budgeOverview' component={BudgetOverview}/>
            </OnboardingStack.Navigator>
        </Provider>
    );

};

export default OnboardingNavigation;