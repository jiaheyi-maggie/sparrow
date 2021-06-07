import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import onboardingStyle from '..styles/onboardingStyle';

const onboarding = ({navigation}) => {
    return (
        <View style={onboardingStyle.container}>
            <Text> Onboarding </Text>
            <Button 
                title="Onboarding"
                onPress={() => navigation.navigate("login")}
            />
        </View>
    );
};

export default onboarding;
