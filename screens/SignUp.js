import React, { useState } from 'react';
import {View, Text, Button, Alert, StyleSheet} from 'react-native';
import styles from "../styles/loginStyle";

const SignUp = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Sign Up </Text>
            <Button 
                title="Sign Up"
                onPress={() => Alert.alert("Login Button Clicked!")}
            />
        </View>
    );
};



export default SignUp;