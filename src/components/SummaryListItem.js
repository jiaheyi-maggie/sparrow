import React, { useState }  from 'react';
import { Text, View, TextInput } from "react-native";
// import { TextInput } from 'react-native-gesture-handler';
import store from '../app/store';
import styles from '../styles/onboardingStyle';

const SummaryListItem = ({ item }) => {

    const period = store.getState().reducer[item.id].period;
    const value = store.getState().reducer[item.id].value;
    const optional = store.getState().reducer[item.id].optional;

    // calculate initial sum based on "period", "value", and "optional" of item
    // return yearly value
    const calculateSumBasedOnPeriod = (p, v, o) => {
        if (v === 0) {
            return 0;
        }
        if (o !== 0) {
            return v * o;
        }
        switch (p) {
            case 'year':
                return v;
            case 'quarter':
                return v * 4;
            case 'month':
                return v * 12;
            case 'week':
                return v * 52;
            case 'day':
                return v * 365;
        }
    }

    // action to change sum
    const updateSum = sum => {
        return {
            type: 'updateSum',
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

    // const onChangeNumber = value => {
    //     setVal(value);
    //     store.dispatch(updateValue(value));

    // }

    const [val, setVal] = useState(value);
    const sum = calculateSumBasedOnPeriod(period, val, optional);
    store.dispatch(updateSum(sum));

    return (
        <View style={styles.listSummaryItem}>
            <View style={styles.genericRowAlign}>
                <Text style={styles.listSummaryTitle}>{item.title}</Text>
                <Text style={styles.listSummaryPeriod}> ({item.period})</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
                <Text style={styles.listSummaryTitle}>${val}</Text>
            </View>
        </View>
    );
};

export default SummaryListItem;