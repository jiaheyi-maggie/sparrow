import React  from 'react';
import { TouchableOpacity, Text, View } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import store from '../app/store';
import styles from '../styles/onboardingStyle';

const SummaryListItem = ({ item }) => {

    // action to change term sum
    const changeCategorySum = item => {
        return {
            type: 'changeCategorySum',
            payload: item
        }
    }

    const onChangeNumber = value => {
        store.dispatch(changeCategorySum(value));
    }
    return (
        <View style={styles.listSummaryItem}>
            <TouchableOpacity >
                <Text style={styles.listSummaryTitle}>{item.title} ({item.period})</Text>
            </TouchableOpacity>

            {/* TODO: change it to text input */}
            <TouchableOpacity >
                <Text style={styles.listSummaryTitle}>${item.sum}</Text>
            </TouchableOpacity>

            {/* <TextInput
                onChangeText={(value) => onChangeNumber(value)}
                value={item.sum}
                keyboardType="phone-pad"
                selectionColor='aliceblue'
                textAlign= 'center'
                style={{fontSize: 40, fontWeight: 'bold', color: '#E76F51'}}
            /> */}

        </View>
    );
};

export default SummaryListItem;