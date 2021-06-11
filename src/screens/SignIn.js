import React from 'react';
import {View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import InfoField from '../components/InfoField';
import styles from "../styles/onboardingStyle";
import componentStyle from '../styles/componentStyle';


const SignIn = ({ navigation }) => {

    // UI Component
    return (
        <SafeAreaView style={{
            margin: 10,
            backgroundColor: '#fff',
            flexDirection: 'column',
            flex: 1
        }}>
            <View style={{marginTop: 50, marginBottom: 30}}> 
                <Text style={componentStyle.title}>Sign In </Text>

                <Text style={styles.subtitle}>Welcome back! </Text>
            </View>
                        

            <Image 
                source={require('../assets/icon-transparent.png')} 
                resizeMode='contain'
                style={
                    {
                        alignSelf: 'center',
                        flex: 0.55,
                        marginBottom: 30
                    }
                }
            />
            <View style={{marginBottom: 20}}>

                <InfoField fieldName={'Username'}/>

                <InfoField fieldName={'Password'}/>
            </View>

            
                        
            {/* Login Button */}
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('home')}
                >
                <Text style={styles.buttonText}> Log In </Text>
            </TouchableOpacity>

            {/* Go to SignUp Button */}
            <TouchableOpacity
                onPress={() => navigation.navigate('signup')}
                >
                <Text style={componentStyle.buttonText}> Create an account </Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

export default SignIn;