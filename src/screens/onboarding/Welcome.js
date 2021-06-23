/* Onboarding Welcome */
import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';

import styles from "../../styles/onboardingStyle";
import componentStyle from '../../styles/componentStyle';

const Welcome = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome </Text>
            <Text style={styles.subtitle}>Congrats on taking the fist step to managing your money efficiently! Let us get to know your spending habits with some basic questions :))</Text>
        
            <Image 
                source={require('../../assets/onboarding/welcome.png')} 
                resizeMode='contain'
                style={styles.imageContainer}
            />

            <View style={{height: 70}}><Text></Text></View>

            {/* Button View  */}
            {/* Sounds good (Continue to next page) Button */}
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('selectCategory')}
                >
                <Text style={styles.buttonText}> Sounds good! </Text>
            </TouchableOpacity>

            {/* Already have an account (go to SignIn) Button */}
            <TouchableOpacity
                onPress={() => navigation.navigate('signin')}
                >
                <Text style={componentStyle.buttonText}> I already have an account </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Welcome;