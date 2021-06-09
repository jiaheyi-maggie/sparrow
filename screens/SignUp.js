import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from "../styles/onboardingStyle";

const SignUp = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Sign Up </Text>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => Alert.alert("Login Button Clicked!")}
            >
                <Text style={styles.buttonText}> Sign Up </Text>
            </TouchableOpacity>
        </View>
    );
};



export default SignUp;