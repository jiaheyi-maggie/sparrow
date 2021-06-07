import React  from 'react';
import { Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

// Customize Button Styles (put in ../components later) -> doesn't work right now
const backgroundColor = isLight => (isLight ? '#264653' : 'aliceblue');
const color = isLight => backgroundColor(!isLight);


// customized button style
const OnboardingNextButton = ({onPress, ...props }) => (
    <Button
        title={'Next'}
        onPress={onPress}
        activeOpacity={0.8}
        buttonStyle={{
            backgroundColor: "#264653",
          }}
        containerViewStyle={onboardingStyle.buttonContainer}
        textStyle={onboardingStyle.buttonText}
        {...props}
    />
);

const Skip = ({ isLight, skipLabel, ...props }) => (
    <Button
      title={'Skip'}
      buttonStyle={{
        backgroundColor: backgroundColor(isLight),
      }}
      containerViewStyle={{
        marginVertical: 10,
        width: 70,
      }}
      textStyle={{ color: color(isLight) }}
      {...props}
    >
      {skipLabel}
    </Button>
  );

  const Done = ({ isLight, ...props }) => (
    <Button
      title={'Done'}
      buttonStyle={{
        backgroundColor: backgroundColor(isLight),
      }}
      containerViewStyle={{
        marginVertical: 10,
        width: 80,
        margin: 50,
        backgroundColor: backgroundColor(isLight),
      }}
      textStyle={{ color: color(isLight) }}
      {...props}
    />
  );

const onboarding = ({navigation}) => {
    return (
        <Onboarding
        NextButtonComponent={OnboardingNextButton}
        SkipButtonComponent={Skip}
        DoneButtonComponent={Done}
        titleStyles={{color: '#264653'}}
        pages={[
            {
                backgroundColor: '#EFEFEF',
                image: <Image 
                    source={require('../assets/onboarding-welcome.png')} 
                    resizeMode='contain'
                    style={{width: 200, height: 200}}
                />,
                title: <Text style={onboardingStyle.title}> Welcome </Text>,
                subtitle: <Text style={onboardingStyle.subtitle}> Congrats on taking the fist step to managing your money efficiently! Let us get to know your spending habits with some basic questions :))</Text>,
            },
            {
                backgroundColor: '#EFEFEF',
                image: <Image 
                    source={require('../assets/mark-categories.png')} 
                    resizeMode='contain'
                    style={{width: 200, height: 200}}
                />,
                title: <Text adjustFontSizeToFit minimumFontScale={.5} 
                        style={onboardingStyle.title}> Mark Categories </Text>,
                subtitle: <Text style={onboardingStyle.subtitle}>This does not have to be perfect, just an estimate!</Text>,
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
        fontSize: 40
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
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    buttonText : {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
  });


export default onboarding;
