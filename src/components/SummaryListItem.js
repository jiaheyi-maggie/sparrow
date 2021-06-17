import React, { useState }  from 'react';
import { TouchableOpacity, Text, View } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import store from '../app/store';
import styles from '../styles/onboardingStyle';

const SummaryListItem = ({ item }) => {

    /* Update sum according to 'value' */

    // fetch period from store
    const period = store.getState().reducer[item.id].period;
    const value = store.getState().reducer[item.id].value;

    // calculate initial sum based on "period" and "value" of item
    const calculateSumBasedOnPeriod = (p, v) => {
        console.log(period);
        console.log(value);
        switch (p) {
            case p === 'Year':
                return v;
            case p === 'Quarter':
                return v * 4;
            case p === 'Month':
                return v * 12;
            case p === 'Week':
                return v * 48;
            case p === 'Day':
                return v * 365;
            default:
                return v;
        }
    }

    const itemCurrSum = calculateSumBasedOnPeriod(period, value);

    // update sum in state (action)
    const updateSumWithValue = sum => {
        return {
            type: 'updateSumWithValue',
            payload: {item, sum}
        }
    }

    store.dispatch(updateSumWithValue(itemCurrSum));

    /* On change sum */
    const [sum, setSum] = useState(itemCurrSum);

    // action to change sum
    const changeCategorySum = sum => {
        return {
            type: 'changeCategorySum',
            payload: {item, sum}
        }
    }

    const onChangeNumber = value => {
        setSum(value);
        store.dispatch(changeCategorySum(value));
    }

    return (
        <View style={styles.listSummaryItem}>
            <TouchableOpacity >
                <Text style={styles.listSummaryTitle}>{item.title} ({item.period})</Text>
            </TouchableOpacity>

            <View style={{flexDirection: 'row'}}>
                <Text style={styles.listSummaryTitle}>$</Text>
                <TextInput
                    onChangeText={(value) => onChangeNumber(value)}
                    value={sum}
                    placeholder='?'
                    keyboardType="phone-pad"
                    selectionColor='#C2A878'
                    textAlign= 'center'
                    style={{
                        fontSize: 23, 
                        fontWeight: 'bold', 
                        color: '#E76F51',
                        textDecorationLine: 'underline'
                    }}
                />
            </View>

        </View>
    );
};

export default SummaryListItem;