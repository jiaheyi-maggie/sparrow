import React, { useState } from 'react';
import {View, Text, Button, Alert, StyleSheet} from 'react-native';
import styles from "../styles/loginStyle";

const login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Login </Text>
            <Button 
                title="Login"
                onPress={() => Alert.alert("Login Button Clicked!")}
            />
        </View>
    );
};



export default login;