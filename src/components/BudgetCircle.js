import React from 'react';
import { Text, TextInput, SafeAreaView, View } from 'react-native';
import store from '../app/store';
import styles from '../styles/componentStyle';
import TimePeriodDropdown from './TimePeriodDropdown';
import TimePicker from './TimePicker';

// TODO: debug short term sum
const BudgetCircle = ({ term, value }) => {

    /* actions for redux */
    const changeLongTerm = input => {
        return {
            type: 'changeLongTerm',
            payload: input
        }
    }

    const changeShortTerm = input => {
        return {
            type: 'changeShortTerm',
            payload: input
        }
    }

    // updates store if numbers are edited
    const onChangeNumber = (value) => {
        if (term === 'Long') {
            store.dispatch(changeLongTerm(value));
        } else if (term === 'Short') {
            store.dispatch(changeShortTerm(value));
        }
    };

    // grab value from store for re-rendering
    // const grabValue = () =>  {
    //     if (term === 'Long') {
    //         return store.getState().longTerm;
    //     } else if (term === 'Short') {
    //         return store.getState().shortTerm; 
    //     }
    // }

    return (
        <SafeAreaView style={{alignItems: 'center'}}>
            <View
                style={styles.budgetCircle}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color: '#FFF4CB', fontSize: 40, fontWeight: 'bold'}}>$ </Text>
                    <TextInput
                        value={value}
                        onChangeText={(value) => onChangeNumber(value)}
                        placeholder="?"
                        placeholderTextColor='#F8FAFB'
                        keyboardType="phone-pad"
                        selectionColor='aliceblue'
                        textAlign= 'center'
                        style={{fontSize: 40, fontWeight: 'bold', color: '#FFF4CB'}}
                    />
                </View>
            </View>
            
            <Text style={styles.reviewText} > {term} Term</Text>

            <SafeAreaView style={{
                flexDirection: 'row', 
                width: 150, 
                height: 30,
                alignItems: 'center'
                }}>
                <Text style={styles.reviewText} >every</Text>
                {/* <TimePeriodDropdown /> */}
                {/* TODO: Time period dropdown */}
            </SafeAreaView>

        </SafeAreaView>
    );
}

export default BudgetCircle;