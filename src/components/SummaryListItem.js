import React, { useState }  from 'react';
import { TouchableOpacity, Text, View } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import store from '../app/store';
import styles from '../styles/onboardingStyle';

const SummaryListItem = ({ item }) => {

    // TODO: change sum's initial state to calculated sum
    const [sum, setSum] = useState(0);

    // action to change term sum
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