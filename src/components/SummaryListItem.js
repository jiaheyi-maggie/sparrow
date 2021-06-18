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
    const optional = store.getState().reducer[item.id].optional;

    // calculate initial sum based on "period", "value", and "optional" of item
    // return yearly value
    const calculateSumBasedOnPeriod = (p, v, o) => {
        if (v === 0) {
            return 0;
        }
        var val = 0; 
        switch (p) {
            case 'year':
                return v;
            case 'quarter':
                return v * 4;
            case 'month':
                if (o != 0) {
                    val = v * o;
                } else {
                    val = v * 12;
                }
            case 'week':
                if (o != 0) {
                    val = v * o; 
                } else {
                    val = v * 48;
                }
            case 'day':
                if (o != 0) {
                    val = v * o;
                } else {
                    val = v * 365;
                }
        }
        return val; 
    }


    const [val, setVal] = useState(value);

    // action to change sum
    const changeCategorySum = sum => {
        return {
            type: 'changeCategorySum',
            payload: {item, sum}
        }
    }

    // action to change value
    const updateValue = value => {
        return {
            type: 'updateValue',
            payload: {item, value}
        }
    }

    const onChangeNumber = value => {
        setVal(value);
        store.dispatch(updateValue(value));
        store.dispatch(changeCategorySum(calculateSumBasedOnPeriod(period, value, optional)));
        // console.log(item.sum);
    }

    return (
        <View style={styles.listSummaryItem}>
            <View style={styles.genericRowAlign}>
                <Text style={styles.listSummaryTitle}>{item.title}</Text>
                <Text style={{
                        color: '#264653',
                        fontWeight: 'bold',
                        textAlign: 'left',
                        fontSize: 23,
                        color: "#E76F51"
                }}> ({item.period})</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.listSummaryTitle}>$</Text>
                <TextInput
                    onChangeText={(value) => onChangeNumber(value)}
                    value={val}
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