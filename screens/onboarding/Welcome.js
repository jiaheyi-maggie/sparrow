import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import styles from "../../styles/onboardingStyle";
import componentStyle from '../../styles/componentStyle';

// TODO: Bottom is grey, figure out why
const Welcome = ({ navigation }) => {
    return (
        <SafeAreaView style={{            
            flexDirection: 'column',
            flex: 1, 
            margin: 10, 
            justifyContent: 'center',
            backgroundColor: '#fff'
            }}>

            {/* TODO: add animated dot pagination*/}
            {/* <Dots length={10} active={true} /> */}
            <View>
                <Text style={{      
                    color: '#264653',
                    fontWeight: 'bold',
                    fontSize: 45,
                    textAlign: 'left',
                    paddingTop: 10,
                    paddingLeft: 15
                    }}> 
                    Welcome 
                </Text>
            </View>

            <View>
                <Text style={styles.subtitle}>Congrats on taking the fist step to managing your money efficiently! Let us get to know your spending habits with some basic questions :))</Text>
            </View>
            
            <Image 
                source={require('../../assets/onboarding/welcome.png')} 
                resizeMode='contain'
                style={styles.imageContainer}
            />

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