import React from 'react';
import {View, Text, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import InfoField from '../components/InfoField';
import styles from "../styles/onboardingStyle";
import componentStyle from '../styles/componentStyle';

const SignUp = ({ navigation }) => {
    return (
        <SafeAreaView style={{
            backgroundColor: '#FFF4CB',
            flexDirection: 'column',
            flex: 1
        }}>

            <View style={{marginTop: 50, marginBottom: 15}}> 
                <Text style={componentStyle.title}>Sign Up </Text>
            </View>

            <View style={{flexDirection: 'column', marginBottom: 20}}>
                <InfoField fieldName={'First Name'}/>

                <InfoField fieldName={'Last Name'}/>

                <InfoField fieldName={'Username'}/>

                <InfoField fieldName={'Email'}/>

                <InfoField fieldName={'Password'}/>
            </View>
            

            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => Alert.alert("Signed Up!")}
                >
                <Text style={styles.buttonText}> Register </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('signin')}
                >
                <Text style={componentStyle.buttonText}> I already have an account </Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};


export default SignUp;