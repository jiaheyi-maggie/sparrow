import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import InfoField from '../components/InfoField';
import styles from "../styles/onboardingStyle";
import componentStyle from '../styles/componentStyle';

const SignUp = () => {
    return (
        <View style={componentStyle.container}>
            <Text style={componentStyle.title}>Sign Up </Text>
            <InfoField fieldName={'First Name'}/>
            <InfoField fieldName={'Last Name'}/>
            <InfoField fieldName={'Username'}/>
            <InfoField fieldName={'Email'}/>
            <InfoField fieldName={'Password'}/>

            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => Alert.alert("Login Button Clicked!")}
            >
                <Text style={styles.buttonText}> Register </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={componentStyle.buttonContainer}
                onPress={() => Alert.alert("Login Button Clicked!")}
            >
                <Text style={styles.buttonText}> I already have an account </Text>
            </TouchableOpacity>
        </View>
    );
};



export default SignUp;