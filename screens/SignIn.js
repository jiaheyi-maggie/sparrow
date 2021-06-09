import React from 'react';
import {View, Text, TouchableOpacity, Alert, Image} from 'react-native';
import InfoField from '../components/InfoField';
import styles from "../styles/onboardingStyle";
import componentStyle from '../styles/componentStyle';

const SignIn = ({ navigation }) => {
    return (
        <View style={{
            margin: 10,
            backgroundColor: '#fff',
            flexDirection: 'column',
            flex: 1
        }}>

            <Text style={componentStyle.title}>Sign In </Text>

            <Text style={styles.subtitle}>Welcome back! </Text>

            <Image 
                source={require('../assets/icon-transparent.png')} 
                resizeMode='contain'
                style={
                    {
                        alignSelf: 'center',
                        flex: 0.9
                    }
                }
            />

            <InfoField fieldName={'Username'}/>

            <InfoField fieldName={'Password'}/>
                        
            {/* Login Button */}
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('signin')}
                >
                <Text style={styles.buttonText}> Log In </Text>
            </TouchableOpacity>

            {/* Go to SignUp Button */}
            <TouchableOpacity
                onPress={() => navigation.navigate('signup')}
                >
                <Text style={componentStyle.buttonText}> Create an account </Text>
            </TouchableOpacity>

        </View>
    );
};

export default SignIn;