import React, { Fragment, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useSelector } from 'react-redux';
import store from '../../app/store';
import TimePeriodDropdown from '../../components/TimePeriodDropdown';
import componentStyle from '../../styles/componentStyle';
import styles from '../../styles/onboardingStyle';

const LongTerm = ({ navigation }) => {

    // grab long term goal from store
    const input = useSelector((state) => state.longTerm);

    // action to change long term value
    const changeLongTerm = input => {
        return {
            type: 'changeLongTerm',
            payload: input
        }
    }

    const inputHandler = (input) => {
        store.dispatch(changeLongTerm(input));
    }

    return (
            <SafeAreaView style={styles.longtermContainer}>
                <View>
                    <Text style={styles.semiLongTitle}>
                        Do you have a long-term budget? 
                    </Text>
                </View>

                <View>
                    <Text style={styles.subtitle}>This way we can start by suggesting a budget that works for you. </Text>
                </View>

                <View style={styles.longtermCenter}>
                    <Text style={styles.longtermDescription}>I plan to spend</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={styles.longtermDescription}>$ </Text>
                        <TextInput
                            style={componentStyle.input}
                            onChangeText={(input) => inputHandler(input)}
                            value={input}
                            placeholder="5000"
                            placeholderTextColor='#FFF4CB'
                            keyboardType="numeric"
                        />
                    </View>
                    
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={styles.longtermDescription}>per </Text>
                        {/* <TimePeriodDropdown /> */}
                        {/* TODO: IMPLEMENT TIMER PERIOD DROPDOWN  */}
                    </View>

                    <View style={{height: 300}}><Text></Text></View>
                </View>

 
                <TouchableOpacity
                    onPress={() => navigation.navigate('budgetOverview')}
                >
                    <Text style={componentStyle.buttonText}> I don't know, review budget! </Text>
                </TouchableOpacity>

                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}> 
                    {/* Back Button */}
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.goBack()}
                        >
                        <Text style={styles.buttonText}>     Back     </Text>
                    </TouchableOpacity>

                    {/* Next Button */}
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.navigate('budgetOverview')}
                        >
                        <Text style={styles.buttonText}> Continue </Text>
                    </TouchableOpacity>
                </View>



            </SafeAreaView>

    );
};

export default LongTerm;