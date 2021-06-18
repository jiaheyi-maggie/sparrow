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

    // calculate short term (monthly)
    const calculateMonthlySumBasedOnPeriod = (p, v) => {
        if (v === 0) {
            return 0;
        }
        switch (p) {
            case 'Year':
                const val = Math.floor(v / 12);
                return val;
            case 'Quarter':
                return Math.floor(v / 4);
            case 'Month':
                return v;
            case 'Week':
                return v * 4;
            case 'Day':
                return v * 30;
            default:
                return v;
        }
    }

    // sum category values
    const calculateShortTermValue = (l) => {
        var shortTermValue = 0; 
        l.forEach((category) => {
            const currVal = calculateMonthlySumBasedOnPeriod(category.period, category.value);
            shortTermValue += parseFloat(currVal);
        });
        return shortTermValue;
    };

    const shortTermValue = calculateShortTermValue(list);
    
    /* On set value */
    const inputHandler = (input) => {
        store.dispatch(changeShortTerm(shortTermValue));
        store.dispatch(changeLongTerm(input));
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


            <TouchableOpacity onPress={() => navigation.navigate('budgetOverview')}>
                <Text style={componentStyle.buttonText}> I don't know, review budget! </Text>
            </TouchableOpacity>

            <View style={styles.multipleButtonContainer}> 
                {/* Back Button */}
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>     Back     </Text>
                </TouchableOpacity>

                {/* Next Button */}
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('budgetOverview')}>
                    <Text style={styles.buttonText}> Continue </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default LongTerm;