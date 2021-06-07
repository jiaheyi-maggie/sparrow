import React, { useState } from 'react';
import {View, Text, Button, Alert} from 'react-native';
import loginStyle from '..styles/loginStyle';

const login = () => {
    return (
        <View style={loginStyle.container}>
            <Text> Login </Text>
            <Button 
                title='Login'
                onPress={() => Alert.alert("Login Button Clicked!")}
            />
        </View>
    );
};

export default login;