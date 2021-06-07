import React, { useState } from 'react';
import {View, Text, Button, Alert, StyleSheet} from 'react-native';

const login = () => {
    return (
        <View style={loginStyle.container}>
            <Text> Login </Text>
            <Button 
                title="Login"
                onPress={() => Alert.alert("Login Button Clicked!")}
            />
        </View>
    );
};

const loginStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


export default login;