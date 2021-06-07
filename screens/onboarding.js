import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


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

const onboardingStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


export default onboarding;
