import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, SafeAreaView, FlatList, ScrollView, TextInput } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import styles from '../styles/onboardingStyle';
import categories from '../data/categories';
import ListItem from '../components/ListItem';
import NumberTextInput from '../components/NumberTextInput';
import TimePeriodDropdown from '../components/TimePeriodDropdown';
import CategoryDetail from './category-detail';
import BudgetCircle from '../components/BudgetCircle';
import SummaryListItem from '../components/SummaryListItem';
import Welcome from '../screens/onboarding/Welcome';
import SelectCategory from './onboarding/SelectCategory';
import LongTerm from './onboarding/LongTerm';
import BudgetOverview from './onboarding/BudgetOverview';


// Done Button
const DoneButton = ({ ... props}) => (
    <TouchableOpacity
    style={styles.buttonContainer}
    { ... props}
    >
        <Text style={styles.buttonText}> Done </Text>
    </TouchableOpacity>
);

// Continue Button
const ContinueButton = ({ ... props}) => (
<TouchableOpacity
    style={styles.buttonContainer}
    {...props}
>
    <Text style={styles.buttonText}> Continue </Text>
</TouchableOpacity>
);

// Skip Button
const SkipButton = ({ ... props}) => (
    <TouchableOpacity
      style={styles.buttonContainer}
      { ... props}
    >
        <Text style={styles.buttonText}> Skip </Text>
    </TouchableOpacity>
);


// Onboarding swipper
const onboarding = ({ navigation }) => {  
    return (
        <Onboarding
        NextButtonComponent={ContinueButton}
        SkipButtonComponent={SkipButton}
        DoneButtonComponent={DoneButton}

        onSkip={() => navigation.navigate('login')}
        onDone={() => navigation.navigate('login')}

        pages={[
            /* Welcome Page */
            {
                title: '',
                subtitle: '',
                backgroundColor: '#fff',
                image: (<Welcome />),
            },

            // TODO: checkbox connects to backend
            /* Select Category Page */
            {
                title: '',
                subtitle: '',
                backgroundColor: '#fff',
                image: (<SelectCategory />),
            },

            /* Long Term Budget Page */
            {
                title: '',
                subtitle: '',
                backgroundColor: '#fff',
                image: (<LongTerm />),
            },
            // TODO: change dummy numbers
            /* Budget Overview Page */
            {
                title: '',
                subtitle: '',
                backgroundColor: '#fff',
                image: ( <BudgetOverview />),
            },
        ]}
        />
    );
};


export default onboarding;
