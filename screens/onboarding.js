import React  from 'react';
import { Button, Image, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

// Customize Button Styles (put in ../components later) -> doesn't work right now
const backgroundColor = isLight => (isLight ? '#264653' : 'aliceblue');
const color = isLight => backgroundColor(!isLight);

const Next = ({ isLight, ...props }) => (
  <Button
    title={'Next'}
    buttonStyle={{
      backgroundColor: backgroundColor(isLight),
    }}
    containerViewStyle={{
      marginVertical: 10,
      width: 70,
      backgroundColor: backgroundColor(!isLight),
    }}
    textStyle={{ color: color(isLight) }}
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
        width: 70,
        backgroundColor: backgroundColor(isLight),
      }}
      textStyle={{ color: color(isLight) }}
      {...props}
    />
  );

const onboarding = ({navigation}) => {
    return (
        <Onboarding
        NextButtonComponent={Next}
        SkipButtonComponent={Skip}
        DoneButtonComponent={Done}
        titleStyles={{color: '#264653'}}
        pages={[
            {
                backgroundColor: '#CDCDCD',
                image: <Image source={require('../assets/onboarding-welcome.png')} />,
                title: 'Welcome',
                subtitle: 'Congrats on taking the fist step to managing your money efficiently! Let us get to know your spending habits with some basic questions :))',
            },
            {
                backgroundColor: '#CDCDCD',
                image: <Image source={require('../assets/mark-categories.png')} />,
                title: 'Mark Categories',
                subtitle: 'This does not have to be perfect, just an estimate!',
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
  });


export default onboarding;
