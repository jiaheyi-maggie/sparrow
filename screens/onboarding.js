import React  from 'react';
import { Text, Button, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

// Customize Button Styles (put in ../components later) -> doesn't work right now
const backgroundColor = isLight => (isLight ? '#264653' : 'aliceblue');
const color = isLight => backgroundColor(!isLight);

//dummy onPress 
const dummyPress = () => Alert.alert("Button pressed");

/* TODO: Pass in title instead of having hard-coded button titles */

// Done Button
  const DoneButton = () => (
      <TouchableOpacity
        style={onboardingStyle.buttonContainer}
      >
          <Text style={onboardingStyle.buttonText}> Done </Text>
      </TouchableOpacity>
  );

  // Continue Button
  const ContinueButton = () => (
    <TouchableOpacity
      style={onboardingStyle.buttonContainer}
    >
        <Text style={onboardingStyle.buttonText}> Continue </Text>
    </TouchableOpacity>
);

// Skip Button
const SkipButton = () => (
    <TouchableOpacity
      style={onboardingStyle.buttonContainer}
    >
        <Text style={onboardingStyle.buttonText}> Skip </Text>
    </TouchableOpacity>
);

const onboarding = ({navigation}) => {
    return (
        <Onboarding
        NextButtonComponent={ContinueButton}
        SkipButtonComponent={SkipButton}
        DoneButtonComponent={DoneButton}

        pages={[
            {
                backgroundColor: '#fff',
                image: <Image 
                    source={require('../assets/onboarding/welcome.png')} 
                    resizeMode='contain'
                    style={{width: 300, height: 300}}
                />,
                title: <Text style={onboardingStyle.title}> Welcome </Text>,
                subtitle: <Text style={onboardingStyle.subtitle}> Congrats on taking the fist step to managing your money efficiently! Let us get to know your spending habits with some basic questions :))</Text>,
            },
            {
                backgroundColor: '#fff',
                image: <Image 
                    source={require('../assets/onboarding/mark-categories.png')} 
                    resizeMode='contain'
                    style={{width: 300, height: 300}}
                />,
                title: <Text adjustFontSizeToFit minimumFontScale={.5} 
                        style={onboardingStyle.title}> Mark Categories </Text>,
                subtitle: <Text style={onboardingStyle.subtitle}>This does not have to be perfect, just an estimate!</Text>,
            },
            {
                backgroundColor: '#fff',
                image: <Image 
                    source={require('../assets/onboarding/long-term.png')} 
                    resizeMode='contain'
                    style={{width: 300, height: 300, alignContent: 'center'}}
                />,
                title: <Text style={onboardingStyle.title}> Do you have a long-term budget? </Text>,
                subtitle: <Text style={onboardingStyle.subtitle}> This way we can start by suggesting a budget that works for you. </Text>,
            },
        ]}
        />
    );
};

const onboardingStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        color: '#264653',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center'
    },
    subtitle: {
        color: '#E76F51',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 15
    },
    buttonContainer: {
        elevation: 8,
        backgroundColor: "#264653",
        borderRadius: 10,
        paddingVertical: 9,
        paddingHorizontal: 9,
        margin: 10
    },
    buttonText : {
        fontSize: 15,
        color: "#fff",
        alignSelf: "center",
        textTransform: "uppercase"
    }
  });


export default onboarding;
