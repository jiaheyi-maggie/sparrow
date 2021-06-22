/* Onboarding Long Term */
import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import Picker from '../../components/picker/Picker';

import { useSelector } from 'react-redux';
import store from '../../app/store';

import componentStyle from '../../styles/componentStyle';
import styles from '../../styles/onboardingStyle';

const LongTerm = ({ navigation }) => {

    /* Change longTerm and shortTerm in store */
    const input = useSelector((state) => state.longTerm);
    const list = store.getState().reducer;

    // actions
    const changeLongTerm = input => {
        return {
            type: 'changeLongTerm',
            payload: input
        }
    }

    const changeShortTerm = val => {
        return {
            type: "changeShortTerm",
            payload: val
        }
    }

    // TODO: check if this is correct!!
    // calculate monthly average for each cateogory
    const calculateMonthlySumBasedOnPeriod = (p, v, o) => {
        if (v === 0) {
            return 0;
        }
        var val = 0;
        switch (p) {
            case 'year':
                val = Math.floor(v / 12);
                return val;
            case 'quarter':
                if (o != 0) {
                    val = Math.floor(v * o / 12);
                } else {
                    val = Math.floor(v / 4);
                }
                return val;
            case 'month':
                if (o != 0) {
                    val = Math.floor(v * o / 12);
                } else {
                    val = v; 
                }
                return val;
            case 'week':
                if (o != 0) {
                    val = Math.floor(v * o / 12);
                } else {
                    val = v * 4;
                }
                return val;
            case 'day':
                if (o != 0) {
                    val = Math.floor(v * o / 12);
                } else {
                    val = v * 30;
                }
                return val;
        }
        return val;
    }

    // sum categories' calculated monthly value
    const calculateShortTermValue = (l) => {
        var shortTermValue = 0; 
        l.forEach((category) => {
            const currVal = calculateMonthlySumBasedOnPeriod(category.period, category.value, category.optional);
            shortTermValue += parseFloat(currVal);
        });
        return shortTermValue;
    };

    const shortTermValue = calculateShortTermValue(list);

    /* On set long term value */
    const inputHandler = (input) => {
        store.dispatch(changeLongTerm(input));
    }

    // on button press
    const handleButtonPress = () => {
        store.dispatch(changeShortTerm(shortTermValue));
        // console.log(store.getState().shortTerm);
        navigation.navigate('budgetOverview');
    }

    return (
        <SafeAreaView style={styles.longtermContainer}>
            <Text style={styles.semiLongTitle}>Do you have a long-term budget?</Text>
            <Text style={styles.subtitle}>This way we can start by suggesting a budget that works for you.</Text>

            <View style={styles.longtermCenter}>
                <Text style={styles.longtermDescription}>I plan to spend</Text>
                <View style={styles.genericRowAlign}>
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

                <View style={{flexDirection:'row', paddingLeft:40}}>
                    <Text style={styles.longtermDescription}>per </Text>
                    <Picker term={'long'}/>
                </View>

                <View style={{height: 300}}><Text></Text></View>
            </View>


            <TouchableOpacity onPress={() => handleButtonPress()}>
                <Text style={componentStyle.buttonText}> I don't know, review budget!</Text>
            </TouchableOpacity>

            <View style={styles.multipleButtonContainer}> 
                {/* Back Button */}
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>     Back     </Text>
                </TouchableOpacity>

                {/* Next Button */}
                <TouchableOpacity style={styles.buttonContainer} onPress={() => handleButtonPress()}>
                    <Text style={styles.buttonText}> Continue </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default LongTerm;