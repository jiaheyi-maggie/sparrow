import React, { Fragment } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import NumberTextInput from '../../components/NumberTextInput';
import TimePeriodDropdown from '../../components/TimePeriodDropdown';
import styles from '../../styles/onboardingStyle';

const LongTerm = ({ navigation }) => {
    return (
            <SafeAreaView style={{
                backgroundColor:'#fff', 
                flex: 1,
                justifyContent: 'flex-start',
                paddingTop: 60
            }}>
                <View>
                    <Text style={styles.title}>
                        Do you have a long-term budget? 
                    </Text>
                </View>

                <View>
                    <Text style={styles.subtitle}>This way we can start by suggesting a budget that works for you. </Text>
                </View>

                <View style={{alignItems: 'center'}}>
                    <Text style={styles.emphasizeText}>I plan to spend</Text>
                    <NumberTextInput />
                    <Text style={styles.emphasizeText}>per</Text>
                    <TimePeriodDropdown />
                </View>

                {/* <Image 
                    source={require('../../assets/onboarding/long-term.png')} 
                    resizeMode='contain'
                    style={styles.imageContainer}
                    /> */}
                
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}> 
                    {/* Back Button */}
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.goBack()}
                        >
                        <Text style={styles.buttonText}> Back </Text>
                    </TouchableOpacity>

                    {/* Next Button */}
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.navigate('budgeOverview')}
                        >
                        <Text style={styles.buttonText}> Continue </Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>

    );
};

export default LongTerm;