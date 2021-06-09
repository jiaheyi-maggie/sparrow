import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Alert, Image} from 'react-native';
import InfoField from '../components/InfoField';
import styles from "../styles/onboardingStyle";
import componentStyle from '../styles/componentStyle';

const SignIn = () => {
    return (
        <View style={componentStyle.container}>
            <Text style={componentStyle.title}>Sign In </Text>
            <Text style={componentStyle.subtitle}>Welcome back! </Text>
            <Image 
            source={require('../assets/icon-transparent.png')} 
            resizeMode='contain'
            style={componentStyle.imageContainer}
            />

            <InfoField fieldName={'Username'}/>
            <InfoField fieldName={'Password'}/>

            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => Alert.alert("Login Button Clicked!")}
            >
                <Text style={styles.buttonText}> Log In </Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignIn;