import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import styles from "../../styles/onboardingStyle";


const Welcome = () => {
    return (
        <SafeAreaView style={styles.withTitleContainer}>
        <View>
            <Text style={styles.title}> Welcome </Text>
            </View>
        <View>
            <Text style={styles.subtitle}>Congrats on taking the fist step to managing your money efficiently! Let us get to know your spending habits with some basic questions :))</Text>
            </View>
        <Image 
            source={require('../assets/onboarding/welcome.png')} 
            resizeMode='contain'
            style={styles.imageContainer}
            />
        </SafeAreaView>
    );
};

export default Welcome;